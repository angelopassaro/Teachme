
//added contact on student
//added
//var loopback = require('loopback');
// changed password hidden in user.json(node_module/loopback/common)
module.exports = function(Student) {
    Student.validatesPresenceOf('universityId',
    {message: 'Email non valida o università non disponibile'});


    Student.observe('before save', function(ctx, next){
        if (ctx.isNewInstance) {
            var domain = checkDomain(ctx.instance.email);
            Student.app.models.University.findOne({where : {tag : domain}}, function(err, university) {
                if (university){
                    ctx.instance.universityId = university.name;
                    next();
                }else
                    next();
            });
        }
    });

    //Find the university domain (conviene partire dal''ultimo punto)
    function checkDomain( email){
        var x = email.replace(/.*@/, " ");
        x = x.split('.');
        console.log("DEBUG    dominio",x[1]);                                                                                         //DEBUG
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
