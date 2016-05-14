var CryptoJS = require('crypto-js')

module.exports = function(Student) {
  /*Interceptor that cript password before memoization*/
  /*instance => req*/
  Student.observe('before save', function(ctx, next){
    var passwd = CryptoJS.AES.encrypt(ctx.instance.password, 'Message'); //AES 256
    ctx.instance.password = passwd;
    //console.log(ctx.instance.password);                                   //DEBUG
    next();
  })

/* (validate)Impossibile controllare la password (vengono cifrate in base a una chiave)
  (checkPassword)Non viene inserito il responde nel body(response body)
  (validate) Aggiungere controllo se non esiste l'utente
  (validate,checkPassword) Riscivere decentemente*/
function validate(mail, psswd) {
  Student.find({where: {email: mail}}, function (error, us){    //search user by email
    console.log(us[0].password);                                         // debug
    if(error){
      console.log("error" + error);
      return ;
    }            //add manage error
    if(us[0].password == psswd){
      console.log(us[0].password + "mia " +psswd);
      return true;
    }
    console.log(us[0].password + " false mia " +psswd);
    return false;
    });
}

Student.checkPassword = function(psswd, mail, cb){
  cb(null, validate(mail,CryptoJS.AES.encrypt(psswd, 'Message')));
  }










  Student.remoteMethod(
        'checkPassword',
        {
          description: "Check user password",
          accepts:
          [
            {arg: 'password', type: 'string', required: true},
            {arg: 'email', type: 'string', required: true}
          ],
          returns:
          [
            {arg: 'accepted', type: 'boolean', default: 'false'}
          ],
        }
    );


}
