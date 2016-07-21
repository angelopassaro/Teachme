module.exports = function (app) {

    //redirect in stutend a /#/signin
    app.get('/signin', function(req, res) {
        res.redirect('/#/signin');
    });


    //index page
    app.get('/',function(req,res){
        res.sendFile('/client/index.html', { root: __dirname + '/../..' });
    });

}
