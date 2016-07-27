var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');

var bodyParser = require('body-parser');
var schedule = require('cron').CronJob;

var app = module.exports = loopback();

var DAY =86400000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(loopback.token());

new schedule('00 00 05 * * 0-6', function() {
    console.log(' > start schedule');                                                                                                           //DEBUG
    console.log('> deleting unconfirmed students');
    deleteStudent();
    console.log('> deleting old token');
    deleteOldToken();
}, null, true);


app.start = function() {
    // start the web server
    return app.listen(function() {
        var baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
    app.start();
});


//Delete a unconfirmed student after two day
function deleteStudent() {
    app.models.student.destroyAll({
        "verificationToken": {"neq": null },
        "created": {lt: Date.now() - DAY*2 }
    },function(err,count) {
        console.log(count);
    });
}


//Delete old token (invalid)
function deleteOldToken() {
    app.models.AccessToken.destroyAll({
        "created": {lt: Date.now() - DAY}
    },function(err,count) {
        console.log(count);
    });
}
