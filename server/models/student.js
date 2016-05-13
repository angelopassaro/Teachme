var CryptoJS = require('crypto-js')

module.exports = function(Student) {
  /*Interceptor that cript password before memoization*/
  /*instance => req*/
  Student.observe('before save', function(ctx, next){
    var passwd = CryptoJS.AES.encrypt("Message", ctx.instance.password); /*AES 256*/
    ctx.instance.password = passwd;
    console.log(ctx.instance.password);
    next();
  })

  
}
