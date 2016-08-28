var app = require('D:/home/site/wwwroot/server/server.js');


var DAY =86400000;

app.models.Student.destroyAll({
    verificationToken: {neq: null},
    emailVerified: {neq: true},
    created: {lte: Date.now() - DAY*2 }
},function(err,count) {
    console.log('> deleting unconfirmed students', count);
});

app.models.AccessToken.destroyAll({
    created: {lt: Date.now() - DAY}
},function(err,count) {
    console.log('> deleting old token', count);
});
