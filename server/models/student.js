//added
//var loopback = require('loopback');
// changed password hidden in user.json(node_module/loopback/common)

var config = require('../../server/config.json');
var path = require('path');


module.exports = function(Student) {
    Student.validatesPresenceOf('universityId',
    {message: 'Invalid Email or university not available'});


    Student.afterRemote('create', function(context, user, next) {
    console.log('> user.afterRemote triggered');

    var options = {
      type: 'email',
      to: user.email,
      from: 'tutor4you6@gmail.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: user
    };

    user.verify(options, function(err, response) {
      if (err) return next(err);

      console.log('> verification email sent:', response);

      context.res.render('response', {
        title: 'Signed up successfully',
        content: 'Please check your email and click on the verification link ' +
            'before logging in.',
        redirectTo: '/',  //controllare
        redirectToLinkText: 'Log in'
      });
    });
});



//https://greenin.space/notes-on-loopback-operation-hooks/
    Student.observe('before save', function(ctx, next){
        if (ctx.isNewInstance) {
            var domain = checkDomain(ctx.instance.email);
            Student.app.models.University.findOne({
                where : {tag : domain}
            }, function(err, university) {
                if (university){
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
        // delete all token
        //http://stackoverflow.com/questions/28607543/how-to-access-the-modal-instances-that-will-be-deleted-in-the-before-delete
        //   Student.observe('before delete', function (ctx, next) {
        //       Student.app.models.Passpartout.findOne({
        //           where:{studentId : ctx.where.email}
        //       }, function(err,passpartout) {
        //           if(passpartout){
        //               Student.app.models.Passpartout.destroyById(passpartout.id , function () {
        //               console.log("Deleted passpartout");                                                                                       //DEBUG
        //               next();
        //       });
        //           }else
        //               next();
        //   });
        // });

// finire
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
            console.log("DEBUG    dominio",x[1]);                                                                                           //DEBUG
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
