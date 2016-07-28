//http://stackoverflow.com/questions/28459975/mean-stack-angular-routing-vs-express-routing
module.exports = function(app) {
    var User = app.models.student;
    var TWO_WEEKS = 60 * 60 * 24 * 7 * 2;

/*******************************************************************************/
    //Test find a unconfirmed student for delete (test function)
    var DAY =86400000;
    /*
    app.get('/bla', function(req,res) {
        User.destroyAll({
            "verificationToken": { "neq": null},
        "created":{ lt: Date.now() - DAY }
        },function(err, students){
            console.log(students);
            console.log(err)
        });
    })
    */
    app.get('/bla', function(req,res) {
        User.destroyAll({
            verificationToken: { neq: null}
        },function(err, students){
            console.log(students);
            console.log(err)
        });
    })



/*******************************************************************************/
    //router for logout page
    app.post('/logout', function(req, res, next) {
        if (!req.accessToken)
        return res.sendStatus(401);
        User.logout(req.accessToken.id, function(err) {
            if (err) return next(err);
            res.redirect('/');
        });
    });


    //routers  for reset password
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


    //add form reset password  test with password-reset.ejs
    app.get('/reset-password', function(req, res, next) {
        if (!req.accessToken) return res.sendStatus(401);
        res.render('password-reset', {
            accessToken: req.accessToken.id
        });
    });

    //reset the user's pasword
    app.post('/reset-password', function(req, res, next) {
        if (!req.accessToken) return res.sendStatus(401);

        //verify passwords match
        if (!req.body.password ||
            !req.body.confirmation ||
            req.body.password !== req.body.confirmation) {
                return res.sendStatus(400, new Error('Passwords do not match'));
            }

            User.findById(req.accessToken.userId, function(err, user) {
                if (err) return res.sendStatus(404);
                user.updateAttribute('password', req.body.password, function(err, user) {
                    if (err) return res.sendStatus(404);
                    console.log('> password reset processed successfully');
                    res.render('response', {
                        title: 'Password reset success',
                        content: 'Your password has been reset successfully',
                        redirectTo: '/',
                        redirectToLinkText: 'Log in'
                    });
                });
            });
        });

    }
