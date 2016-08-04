//http://stackoverflow.com/questions/28459975/mean-stack-angular-routing-vs-express-routing
module.exports = function(app) {
    var User = app.models.student;

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
        app.models.Lesson.find({
            where: {studentId: "a.passaro14@studenti.unisa.it"}
        }, function(err, lessons) {
            console.log(lessons[0].teach)
        });
    })



/*******************************************************************************/

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
