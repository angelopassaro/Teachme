module.exports = function (app) {

    //index page
    app.get('/',function(req,res){
        res.sendFile('/client/index.html', { root: __dirname + '/../..' });
    });


    //redirect in stutend a /#/signin
    app.get('/signin', function(req, res) {
       res.redirect('/#/signin');
    });

    //redirect  a /#/signup
    app.get('/signup', function(req, res) {
       res.redirect('/#/signup');
    });


}
