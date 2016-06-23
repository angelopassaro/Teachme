
//added contact on student
//added
//var loopback = require('loopback');
// changed password hidden in user.json(node_module/loopback/common)
module.exports = function(Student) {

  Student.observe('before save', function(ctx, next){
    if (ctx.isNewInstance) {
      console.log('document is new');                             //DEBUG
      console.log('save(), create(), or upsert() called');  //DEBUG
      console.log('ctx.instance', ctx.instance.email);     //DEBUG
      x = ctx.instance.email.replace(/.*@/, " ");
      x = x.split('.');
      console.log(" dominio",x[1]);                             //DEBUG
  })
    } else {
      console.log('document is updated');                 //DEBUG
      if (ctx.instance) {
        console.log('save() called');                         //DEBUG
        console.log('ctx.instance', ctx.instance);    //DEBUG
      } else if (ctx.data && ctx.currentInstance) {
        console.log('prototype.updateAttributes() called');   //DEBUG
        console.log('ctx.currentInstance', ctx.instance);   //DEBUG
        console.log('ctx.data', ctx.data);    //DEBUG
      } else if (ctx.data) {
        console.log('updateAll() or upsert() called');    //DEBUG
        console.log('ctx.data', ctx.data);    //DEBUG
      }
    }

    next();
  });
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
