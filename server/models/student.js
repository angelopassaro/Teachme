
//added contact on student
//added
//var loopback = require('loopback');
// changed password hidden in user.json(node_module/loopback/common)
module.exports = function(Student) {
    Student.validatesPresenceOf('universityId',
    {message: 'Invalid Email or university not available'});


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
            ctx.currentInstance.mypasspartout.expiredDate=sumData(ctx.currentInstance.
                mypasspartout.expiredDate, ctx.data.mypasspartout.expiredDate);
                //console.log(ctx.data.mypasspartout);
                //console.log(ctx.currentInstance.mypasspartout.expiredDate);                                                                                          //DEBUG
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

        function sumData(oldDate, newDate){
            //console.log(oldDate ,"  ", newDate);                                                                                                    //DEBUG
            var data = Date();
            console.log(newDate.getFullYear(), oldDate.getFullYear());
            if(oldDate.getFullYear < newDate.getFullYear()){
            data.setFullYear( )+(newDate.getFullYear()-oldDate.getFullYear());
            console.log(newDate.getFullYear(), oldDate.getFullYear());
        }
            if(oldDate.getUTCMonth()+1 < newDate.getUTCMonth()+1)
            data.setFullUTCMonth( )+(newDate.getUTCMonth()-oldDate.getUTCMonth());
            if(oldDate.getUTCDate()+1 < newDate.getUTCDate())
            data.setFullUTCDate( )+(newDate.getUTCDate()-oldDate.getUTCDate());
            //console.log(data);
            return data;
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
