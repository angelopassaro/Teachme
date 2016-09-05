var config = require('../../server/config.json');
var path = require('path');
var loopback = require('loopback');

module.exports = function(Student) {



    /*check the value of field */
    Student.validatesPresenceOf('username', {message: 'Enter an username'});
    Student.validatesLengthOf('username', {min: 3,  message: {min: ' Enter min 3 characters  '}});



    //https://greenin.space/notes-on-loopback-operation-hooks/
    /* before save  a new user check for valid email and add a default contact*/
    Student.observe('before save', function(ctx, next) {

        var error = new Error();
        error.status = 401;


        if (ctx.isNewInstance) {
            var domain = checkDomain(ctx.instance.email);
            Student.app.models.University.findOne({
                where: {tag : domain}
            }, function(err, university) {
                if (university) { //add Student need next to confirm
                    //addContact(ctx.instance.contact, ctx.instance.email);
                    ctx.instance.universityId = university.id;
                    next();
                } else
                next(error.message = "Can't create user");
            });
        } else {
            if(ctx.data)
                if(ctx.data.mypasspartout)
                    updatePasspartout(ctx);
            next();
        }
    });





    /*triggered for verification email*/
    Student.afterRemote('create', function(context, user, next) {
        console.log('> user.afterRemote triggered');                                                                                   //DEBUG
        sendEmail(user);
        next();
    });





    Student.on('resetPasswordRequest', function(user) {
        var url = 'http://' + config.host + ':' + config.port + '/reset-password';
        var html = 'Click <a href="' + url + '?access_token=' +
        user.accessToken.id + '">here</a> to reset your password';


        var texts = ["Password reset", html];
        sendEmail(user.user, texts);

    });




    // send a emai when a student require a lesson
    Student.afterRemote('*.__link__require', function(context, instance, next) {

        Student.app.models.Lesson.findById(instance.lessonId, function(err, lesson){
            if(lesson) {

                if(lesson.dateLesson < Date.now()) {
                    next(new Error("Can't require this lesson."));

                } else {
                    lesson.updateAttribute('available', false, function(err,update) {
                    });

                    Student.findById(lesson.studentId, function(err, student) {
                        if(student) {
                            student.notification.create(
                                { text : context.instance.name + " require a lesson for " +
                                lesson.courseId, "creation":  new Date()}
                            );
                            var options = ["News: Request lesson", " Have request for lesson check your account"];
                            sendEmail(student, options);
                        }

                    })

                    next();
                }
            }
        }
    )
});






    // operation for reqiore delete
    Student.afterRemote('*.__unlink__require', function(context, instance, next){
        Student.app.models.Lesson.findById(context.args.fk, function(err, lesson) {
            if(lesson) {
                lesson.updateAttribute('available', true, function(err, update){
                })
            }
        })
        next();
    });





    //scriverla meglio app.models verra usato spesso ??var = app.models e array di models da usare  per utilizzare un for?? creare un unico metodo da utilizzare per tutti i models vedi mixins
    //http://stackoverflow.com/questions/28607543/how-to-access-the-modal-instances-that-will-be-deleted-in-the-before-delete
    /* Delete cascade for user  */
    Student.observe('before delete', function (ctx, next) {

        if(ctx.where.email) {

              Student.app.models.Feedback.destroyAll({
                  studentId: ctx.where.email
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
                         lessons[i].destroy();
                     }
                 }
             })

             Student.findById(ctx.where.email, function(err, student) {
                 if(student) {
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
    function sendEmail(user, texts) {

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

                console.log("options",options)
                console.log("user",user)
                user.verify(options, function(err, response) {
                    //console.log("errore",err);
                    //console.log('> email sent:', response);   
                });
        }



//add dinamically  a contact  or default the email
/*    function addContact(contact, data, type) {


        var type = type || "University email";
        var jsondata = {};
        jsondata["visibility"] = true;
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (type != "University email") {
            jsondata["visibility"] = false;
            if (type == "Telephone" && !(data.match(phoneno))) {
                return false;
            }

            if (type == "Email" && !(data.match(re))) {
                return false
            }
        }

        jsondata[type] = data ;
        contacts.push(jsondata);
        return true;
    }*/






    /*Find the university domain (conviene partire dal''ultimo punto)*/
    function checkDomain(email) {
        var x = email.replace(/.*@/, " ");
        x = x.split('.');
        //console.log("DEBUG    dominio",x[1]);                                                                                           //DEBUG
        return x[1];
    }








    //remoteMethod for re-send registration email
    Student.send = function(email, cb) {

        var error = new Error();
        error.status = 401;
        error.message = "Student don't exist";

        Student.findOne({
            where: {
                email: email,
                emailVerified: {neq: true}
            }
        }, function (err, user) {
            if(!user) return cb(error);
            sendEmail(user);
            cb(null, "Check your email");
        })
    }


/*
    Student.contact = function(email, data, type, cb) {

        var error = new Error();
        error.status = 401;


        Student.findById( email, function (err, user) {
            if(!user) return cb(error.message = "User don't exist");

            if(addContact(user.contact, type, data)) {
                user.save();
                cb(null);
            } else {
                cb(error.message = "No valid contact");
            }
        })
    }
*/



    // remoteMethod for show the notification and delete them
    Student.notify = function(token, cb) {

        var error = new Error();
        error.status = 401;

        var list = [];

        Student.app.models.AccessToken.findById(token, function(err,token) {
            if(token) {
                Student.findById(token.userId, function(err, student) {
                    if (student) {

                        var length = student.mynotification.length;

                        for (var i = 0; i < length; i++) {
                            list.push(student.mynotification[i]);
                        }

                        student.notification.destroyAll(function(err) {
                            //console.log("Called notify. Deleted notification of user");
                        });

                        cb(null, list, length);
                    } else
                    cb(error.message = "Student don't exist");
                })
            } else {
                cb(error.message = "Invalid session");
            }
        })



    }

/*    Student.remoteMethod(
        'contact',
        {
            description: 'Add a contact of specific student',
            accepts: [
                {arg: 'email', type: 'string', required: true, description: 'Email of student who want add a new contact'},
                {arg: 'type', type: 'string', required: true, description: 'Type of contact'},
                {arg: 'data', type: 'string', required: true, description: ' Value of Data'}
            ],
            http: {verb: 'post', path: '/contact'}
        }
    )
*/
Student.remoteMethod(
    'send',
    {
        description: 'Send verification email',
        accepts: {arg: 'email', type: 'string', required: true},
        returns: {arg: 'info', type: 'string'},
        http: {verb: 'post', path: '/re-email'}
    }
)



     Student.remoteMethod(
         'notify',
         {
             description: 'Show user notifications',
             accepts: {arg: 'token', type: 'string', required: true, description: 'The token of current user'},
             returns: [
                 {arg: 'list', type: 'array'},
                 {arg: 'count', type: 'number'}
             ],
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
