var crypto = require('crypto-js')
module.exports = function(Student) {
  Student.observe('before save', function cryptPassword(ctx, next){
    ctx.instance.password = crypto.AES.encrypt("Message", ctx.instance.password);
    next();
  });
/*Useless function */
  Student.observe('access', function checkPasswd(ctx, next){
    var encrypt = crypto.AES.encrypt("Message", ctx.instance.password);
    if(ctx.currentInstance.password == encrypt){
      console.log("Accept");
      next();
    }
  });
}
