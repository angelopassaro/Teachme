var config = require('../../server/config.json');
var path = require('path');
var loopback = require('loopback');


module.exports = function(Student) {

"use strict";


    /*check the presence of field id*/
    Student.validatesPresenceOf('universityId', {message: 'Invalid Email or university not available'});
    Student.validatesPresenceOf('username', {message: 'Enter an username'});
    Student.validatesLengthOf('username', {min: 3,  message: {min: ' Enter min 3 characters  '}});



    //https://greenin.space/notes-on-loopback-operation-hooks/
    /* before save  a new user check for valid email and add a default contact*/
    Student.observe('before save', function(ctx, next) {
        if (ctx.isNewInstance) {
            var domain = checkDomain(ctx.instance.email);
            Student.app.models.University.findOne({
                where: {tag : domain}
            }, function(err, university) {
                if (university) { //add Student need next to confirm
                    addContact(ctx.instance.contact, ctx.instance.email);
                    ctx.instance.universityId = university.id;
                    next();
                } else
                next();
            });
        } else {
            //console.log("CTX DATA ",ctx.data);                                                                                        //DEBUG
            //console.log("CTX INSTANCE ",ctx.currentInstance);                                                             //DEBUG
            //console.log("CTX INSTANCE ",ctx.currentInstance);                                                             //DEBUG
            if(ctx.data)
                if(ctx.data.mypasspartout)
                    updatePasspartout(ctx);
            next();
        }
    });





    /*triggered for verification email*/
    Student.afterRemote('create', function(context, user, next) {
        console.log('> user.afterRemote triggered');                                                                                   //DEBUG
        Email(user);
        next();
    });





    Student.on('resetPasswordRequest', function(user) {
        var url = 'http://' + config.host + ':' + config.port + '/reset-password';
        var html = 'Click <a href="' + url + '?access_token=' +
        user.accessToken.id + '">here</a> to reset your password';


        var texts = ["Password reset", html];
        Email(user.user, texts);

    });




    // send a emai when a student require a lesson
    Student.afterRemote('*.__link__require', function(context, instance, next) {
        Student.app.models.Lesson.findById(instance.lessonId, function(err, lesson){
            if(lesson){

                Student.findById(lesson.studentId, function(err, student) {
                    if(student) {
                        student.notification.create(
                            { text : context.instance.name + " require a lesson for " +
                                lesson.courseId, "creation":  new Date()}
                         );
                        var options = ["News: Request lesson", " Have request for lesson check your account"];
                        Email(student, options);
                    }
                })
            }
        }
    )
    next();
});






    // operation for reqiore delete
    Student.afterRemote('*.__unlink__require', function(context, instance, next){
        //console.log(context);
        next();
    });





    //scriverla meglio app.models verra usato spesso ??var = app.models e array di models da usare  per utilizzare un for?? creare un unico metodo da utilizzare per tutti i models vedi mixins
    //http://stackoverflow.com/questions/28607543/how-to-access-the-modal-instances-that-will-be-deleted-in-the-before-delete
    /* Delete cascade for user  */
    Student.observe('before delete', function (ctx, next) {

        if(ctx.where.email) {

             Student.app.models.Feedback.destroyAll({
                 sendToId: ctx.where.email
             }, function(err,feedback) {
                 //console.log("feedback cancellati", feedback);
             });

             Student.app.models.Lesson.find({
                 where:{
                     studentId: ctx.where.email
                 }
             }, function(err, lessons) {
                 if(lessons){
                     //console.log(lessons);
                     var linkModel = loopback.getModelByType("studentlesson");
                     for(var i = 0; i < lessons.length; i++){
                         //console.log(lessons[i].id);
                         linkModel.destroyAll({ lessonId : lessons[i].id});
                     }
                 }
             })

             Student.findById(ctx.where.email, function(err, student) {
                 if(student) {
                     console.log("trovato student")
                     student.teach.destroyAll(function(err) {
                         //console.log(err);
                     })
                     // check again again .....
                     student.require.destroyAll(function(err) {
                         //console.log(err);
                     })
                 }
             });

             Student.app.models.AccessToken.destroyAll({
                 userId: ctx.where.email
             },function(err, token) {
                 //console.log("token cancellati", token);
             })
         }

        next();
    });




    // rifare
    function updatePasspartout(ctx){
        Student.findOne({
            "where" : { username : ctx.currentInstance.username}
        }, function(err,student) {
            if(student.mypasspartout != undefined){
                var newDate = ctx.data.mypasspartout.expiredDate;
                var  oldDate = student.mypasspartout.expiredDate;
                if(oldDate.getFullYear < newDate.getFullYear()){
                    newDate.setFullYear(newDate.getFullYear() +
                    (newDate.getFullYear() - oldDate.getFullYear()));
                }
                if(oldDate.getUTCMonth() + 1 < newDate.getUTCMonth() + 1)
                newDate.setUTCMonth((newDate.getUTCMonth() +
                (getUTCMonth() - oldDate.getUTCMonth())));
                if(oldDate.getUTCDate() < newDate.getUTCDate())
                newDate.setUTCDate((newDate.getUTCDate() +
                (newDate.getUTCDate()-oldDate.getUTCDate())));
                console.log(newDate);
            }
        });
    }




// send a email a specific user
//@param user the user that recive the email
//@param texts an array contatin subject and body email
    function Email(user, texts) {

        var texts = texts || null;

            var options = {
                type: 'email',
                to: user.email,
                from: 'tutor4you6@gmail.com',
                user: user,
                template: path.resolve(__dirname, '../../server/views/verify.ejs'),
                redirect: '/signin',
                title: "<h3> Welcome in Tutor4You </h3>"
            };


            if (texts != null && texts.length == 2) {
                options["subject"] = texts[0];
                options["html"] = texts[1];
                options["redirect"] = " ";

                Student.app.models.Email.send(options, function(err) {
                    if(err) console.log("error  email");
                });

                return;
            }


                user.verify(options, function(err, response) {
                    if (err) return next(err);
                    //console.log('> email sent:', response);                                                                                    //DEBUG
                });
        }




        //remoteMethod for re-send registration email
        Student.send = function(email, cb) {

            var error = new Error();
            error.status = 401;

            Student.findOne({
                where: {
                    email: email,
                    emailVerified: {neq: true}
                }
            }, function (err, user) {
                if(!user) return cb(error, "Student don't exist");
                Email(user);
                cb(null, "Check your email");
            })
        }


        Student.notify = function(email, cb) {

            var list = [];

            Student.findById(email,function(err, student) {

                //console.log(Student.app.models.Student.prototype)


                if (student) {
                    var mynotification = student.mynotification;

                    for (var i = 0; i < mynotification.length; i++) {
                        list.push(mynotification[i]);
                        //console.log(mynotification[i])
                        student.notification.destroy(mynotification[i].id)
                    }

                    //console.log("primo",list);
                    cb(null, list);
            } else
                cb(null,"User don't exist");
        })

    }


/*add dinamically  a contact  or default the email  at creation*/
    function addContact(contact, data, type) {
        var type = type || "Default email";
        var jsondata = {};
        jsondata[type] = data ;
        contact.push(jsondata);
    }





    /*Find the university domain (conviene partire dal''ultimo punto)*/
    function checkDomain(email) {
        var x = email.replace(/.*@/, " ");
        x = x.split('.');
        //console.log("DEBUG    dominio",x[1]);                                                                                           //DEBUG
        return x[1];
    }





    Student.remoteMethod(
        'send',
        {
            description:'Send verification email',
            accepts: {arg: 'email', type: 'string', required: true},
            returns: {arg: 'info', type: 'string'},
            http: {verb: 'post', path: '/re-email'}
        }
    )



     Student.remoteMethod(
         'notify',
         {
             description:'Show user notifications',
             accepts: {arg: 'email', type: 'string', required: true},
             returns: {arg: 'list', type: 'array'},
             http: {verb: 'post', path: '/notify'}
         }
     )




}

/*
//added
function getCurrentUserId() {
var ctx = loopback.getCurrentContext();
var accessToken = ctx && ctx.get('accessToken');
var userId = accessToken && accessToken.userId;
return userId;
}
//added
Student.example = function(cb){
var userId = getCurrentUserId();
if(!userId){
console.log("ERROR");
cb();
}else{
console.log(userId);
}
}
Student.remoteMethod(
'example',
{
returns : {arg: "userId", type: "array"}
}
)
*/
