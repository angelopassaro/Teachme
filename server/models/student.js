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

/* Impossibile controllare la password (vengono cifrate in base a una chiave) ("fixed")
  (Non viene inserito il responde nel body(response body)(fixed)
  Aggiungere controllo se non esiste l'utente*/
Student.checkPassword = function(psswd, mail, cb){
  Student.findOne({where: {email: mail}}, function (error, us){    //search user by email
    console.log(us.password);                                         // DEBUG
    //console.log(error);                                             //DEBUG
    if(error){      //error undefined  
      console.log("error" + error);                                   //DEBUG
      return cb(error);
    }
    var bytes  = CryptoJS.AES.decrypt(us.password.toString(), 'Message');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    (plaintext === psswd) ? cb(null,true) : cb(null,false);
    });
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
