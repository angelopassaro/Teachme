//http://stackoverflow.com/questions/28459975/mean-stack-angular-routing-vs-express-routing
module.exports = function(app) {
    var User = app.models.student;
    var TWO_WEEKS = 60 * 60 * 24 * 7 * 2;

//redirect in stutend a /#/signin
    app.get('/signin', function(req, res) {
        res.redirect('/#/signin');
    });


    //index page
    app.get('/',function(req,res){
        res.sendFile('/client/index.html', { root: __dirname + '/../..' });
    });

    //Test find a unconfirmed student for delete
    app.get('/bla', function(req,res) {
        User.find({
            where:{ emailVerified : false }
        },function(err, students){
            console.log(students);
        });
    })

    app.post('/login', function(req, res) {
        //var or no ????
        var mail = {
            email: req.body.email,
            password: req.body.password,
            ttl: TWO_WEEKS
        };

        var username = {
            username: req.body.email,
            password: req.body.password,
            ttl: TWO_WEEKS
        };

        User.login(mail, function(err, token) {
            if(token)
                console.log(token.id);                                                                                                              // DEBUG
                //redirect home user
        });

        User.login(username, function(err, token) {
            if(token)
                console.log(token.id);                                                                                                               //DEBUG
                //redirect home user
        });
    });


    app.post('/logout', function(req, res, next) {
        if (!req.accessToken)
            return res.sendStatus(401);
        User.logout(req.accessToken.id, function(err) {
            if (err) return next(err);
            res.redirect('/');
        });
    });



    /*
app.post('/request-password-reset', function(req, res, next) {
User.resetPassword({
email: req.body.email
}, function(err) {
if (err) return res.status(401).send(err);

res.render('response', {
title: 'Password reset requested',
content: 'Check your email for further instructions',
redirectTo: '/',
redirectToLinkText: 'Log in'
});
});
});
*/

}
