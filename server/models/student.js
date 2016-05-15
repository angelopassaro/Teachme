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

  /*Funzione prototipo di logout. Bisogna aggiungere il kick alla home page e rimozione di
    eventuale token di accesso*/
  Student.logout = function(userId, cb){
    Student.findById(userId, function(error, user){
      console.log(user) //DEBUG
      if(error){
        console.log("error"+error);
        return cb(error);
      }
    });
  }

  /*Funzione di ricerca completa: cerca per nome, università, corso con inserimento parziale, nullo o totale di ognuno di essi*/
  Student.findTutor = function(tutorName, university, course, cb){
    if(tutorName === null && university === null && course === null){ //default search
      Student.find({where: {isTutor: true}}, function(error, tutors){
        if(error){
          console.log(error); //DEBUG
          return cb(error);
        }
      });
    }else if(tutorName != null && university === null && course === null){ // search for name
      Student.find({where: {and: [{isTutor: true}, {name: tutorName}]}}, function(error, tutors){
        if(error){
          console.log(error); //DEBUG
          return cb(error);
        }
      });
    }else if(tutorName === null, && university === null && course != null){ //search tutor by course
      Student.find({include: {
        relation: 'some_relation',
        where: {isTutor: true},
        scope:{
          fields: ['name'],
          where: {name: course},
          include:{
            relation: 'offers',
            scope:{
              fields: ['name'],
            }
          }
        }
      }}, function(error, tutors){
        if(error){
          console.log(error);
          cb(error);
        }
      });
    }else if(tutorName === null && university != null && course === null){ //search tutors for university
      Student.find({include: {
        relation: 'some_relation',
        where: {isTutor: true},
        scope:{
          fields['name'],
          include:{
            relation: 'offers',
            scope:{
              fields: ['name'],
              where: {name: university}
            }
          }
        }
      }}, function(error, tutors){
        if(error){
          console.log(error);
        }
      });

    }else if(tutorName === null && university != null && course != null){ //search for university and course
      Student.find({include: {
        relation: 'some_relation',
        where: {isTutor: true},
        scope: {
          fields['name'],
          where: { name: course},
          include: {
            relation: 'offers',
            scope:{
              fields['name'],
              where: {name: university}
            }
          }
        }
      }}, function(error, tutors){
        if(error){
          console.log(error);
        }
      });
    }else if(tutorName != null && university != null && course === null){ // search for name and university
      Student.find({include:{
        relation: 'some_relation',
        where: { and: {[isTutor: true, name: tutorName]}},
        scope:{
          fields['name'],
          include: {
            relation: 'offers',
            scope: {
              fields['name'],
              where: {name: university}
            }
          }
        }
      }}, function(error, tutors){
        if(error){
          console.log(error);
        }
      });
    }else if(tutorName != null && university === null && course != null){ //search for name and course
      Student.find({include: {
        relation: 'some_relation',
        where: { and: {[isTutor: true, name: tutorName]}},
        scope: {
          fields['name'],
          include: {
            relation: 'offers',
            where: {name: course}
            scope: {
              fields['name']
            }
          }
        }
      }}, function(error, tutors){
        if(error){
          console.log();
        }
      });
    }else if(tutorName != null && university != null && course != null){ //search for all parameters setted
      Student.find({include: {
        relation: 'some_relation',
        where: { and: {[isTutor: true, name: tutorName]}},
        scope: {
          fields['name'],
          where: {name: course}
          include: {
            relation: 'offers',
            scope: {
              fields['name'],
              where: {name: university}
            }
          }
        }
      }}, function(error, tutors){
        if(error){
          console.log(error);
        }
      });
    }
  }//End function


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

    Student.remoteMethod(
      'logout',
      {
        description: "Logout user",
        accepts:
        [
          {arg: 'id', type: 'string', required: true}
        ],
        returs:
        [
          {arg: 'exited', type: 'boolean', default: 'false'}
        ],
      }
    );

    Student.remoteMethod(
      'findTutor',
      {
        description: "Find a tutor by some parameters",
        accepts:
        [
          {arg: 'name', type: 'string', required: false, default: "null"},
          {arg: 'university', type: 'string', required: false, default: "null"},
          {arg: 'course', type: 'string', required: false, default: "null"}
        ],
      }
    );


}
