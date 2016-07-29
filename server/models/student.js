//added
//var loopback = require('loopback');
// changed password hidden in user.json(node_module/loopback/common)

var config = require('../../server/config.json');
var path = require('path');


module.exports = function(Student) {
    /*check the presence of field id */
    Student.validatesPresenceOf('universityId', {message: 'Invalid Email or university not available'});
    Student.validatesPresenceOf('username', {message: 'Enter an username'});
    Student.validatesLengthOf('username', {min: 3, message: {min: ' Enter min 3 characters  '}});
    Student.validatesLengthOf('password', {min: 5, message:{min: 'Enter min 5 characters' }})

    //console.log(hostAddress);
    //console.log(portNumber);
    //sconsole.log(restApiRoot);

    Student.afterRemote('create', function(context, user, next) {
        console.log('> user.afterRemote triggered');                                                                                       //DEBUG



        //     var verifyLink = 'https://' +
        //                             hostAddress +
        //                             ':' +
        //                             portNumber +
        //                             restApiRoot +
        //                             '/students/confirm' +
        //                             '?uid=' +
        //                             user.id +
        //                             '&redirect=' +
        //                             verifyRedirect;
        //


        var options = {
            type: 'email',
            to: user.email,
            from: 'tutor4you6@gmail.com',
            template: path.resolve(__dirname, '../../server/views/verify.ejs'),
            redirect: '/signin',
            user: user,
        };

        user.verify(options, function(err, response) {
            if (err) return next(err);
            next();

            // console.log('> verification email sent:', response);                                                                           //DEBUG

        });
    });


    Student.on('resetPasswordRequest', function(info) {
        var url = 'http://' + config.host + ':' + config.port + '/reset-password';
        var html = 'Click <a href="' + url + '?access_token=' +
        info.accessToken.id + '">here</a> to reset your password';

        //console.log(info);                                                                                                                             //DEBUG
        // console.log(info.email);                                                                                                                   //DEBUG

        Student.app.models.Email.send({
            to: info.email,
            from: 'tutor4you6@gmail.com',
            subject: 'Password reset',
            html: html
        }, function(err) {
            if (err) return console.log('> error sending password reset email');
            console.log('> sending password reset email to:', info.email);
        });
    });



    //https://greenin.space/notes-on-loopback-operation-hooks/
    Student.observe('before save', function(ctx, next){
        if (ctx.isNewInstance) {
            var domain = checkDomain(ctx.instance.email);
            Student.app.models.University.findOne({
                where: {tag : domain}
            }, function(err, university) {
                if (university){ //add Student need next to confirm
                    ctx.instance.universityId = university.name;
                    addContact(ctx,ctx.instance.email);
                    next();
                }else
                next();
            });
        }else {
            //console.log("CTX DATA ",ctx.data);                                                                                        //DEBUG
            //console.log("CTX INSTANCE ",ctx.currentInstance);                                                             //DEBUG
            //console.log("CTX INSTANCE ",ctx.currentInstance);                                                             //DEBUG
            if(ctx.data)
            if(ctx.data.mypasspartout)
            updatePasspartout(ctx);
            next();
        }
    });


    //scriverla meglio app.models verra usato spesso ??var = app.models e array di models da usare  per utilizzare un for?? creare un unico metodo da utilizzare per tutti i models vedi mixins
    //http://stackoverflow.com/questions/28607543/how-to-access-the-modal-instances-that-will-be-deleted-in-the-before-delete
    Student.observe('before delete', function (ctx, next) {
        Student.app.models.Passpartout.destroyAll({
            studentId: ctx.where.email
        }, function(err,passpartout) {
            //console.log(passpartout);
            //console.log(err);
            next();
        });
        Student.app.models.Feedback.destroyAll({
            sendToId: ctx.where.email
        }, function(err,feedback) {
            //console.log(feedback);
            //console.log(err);
            next();
        });
        // check
        Student.app.models.Lesson.findAll({
            where: {studentId: ctx.where.email}
        }, function(err, lessons) {
                for (var i = 0; i < lessons.length; i++) {
                    Student.app.models.studentlesson.destroyAll({
                        lessonId: lessons[i].id
                    });
                }
                next();
        });
        Student.app.models.AccessToken.destroyAll({
            userId: ctx.where.email
        },function(err, count){
            next();
        })
    });

    // rifare
    function updatePasspartout(ctx){
        Student.findOne({
            "where" : { username : ctx.currentInstance.username}
        }, function(err,student){
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

    //add dinamically  a contact  or default the email  at creation -> scriverla meglio
    function addContact(ctx, data, type="Default email"){
        var jsondata = {};
        jsondata[type] = data ;
        ctx.instance.contact.push(jsondata);

    }


    //Find the university domain (conviene partire dal''ultimo punto)
    function checkDomain(email){
        var x = email.replace(/.*@/, " ");
        x = x.split('.');
        //console.log("DEBUG    dominio",x[1]);                                                                                           //DEBUG
        return x[1];
    }
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
