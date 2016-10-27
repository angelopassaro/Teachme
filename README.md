**Tutor4You**

Platform for tutoring.

*Developed with:*

* [HTML5](https://it.wikipedia.org/wiki/HTML5)
* [CSS3](https://it.wikipedia.org/wiki/CSS)
* [ANGULARJS](https://it.wikipedia.org/wiki/AngularJS)
* [LOOPBACK](https://strongloop.com/node-js/loopback-framework/)
* [MONGODB](https://it.wikipedia.org/wiki/MongoDB)

#TODO LIST

###Front End
* Use better resized images for home page (NOT CRITICAL)
* Create view, controllers and style for service page. (PARTIALS)
* Add responsive platform.html (CRITICAL)
* Need RegExp pattern for global validantion (PARTIALS)
* Set filter limit to mySkill (!IMPORTANT)
* Streaming Peer to Peer ? (NOT IMPORTANT)

---------------------------
* Clear user https://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK
--------------------------

effetuare il login , poi il logout(vedere che succede alla pagina principale) effettuare nuovamente il login (vedere che succede)

###Back End
* Feedback specifici +
* Test email verification   (OK)
* Add login function (OK)
* Add logout (OK)
* Add a function for  resetpassword (OK)
* Delete an user not validated (OK)  (!check time schedule(is modified)!)
* Delete old token (OK)
* Aggiungere controlli email e lunghezza caratteri stringhe. (OK)
*  Re-email (OK) (only check a new user registration)
* Start delete cascade user(OK)
* Email when a studen ask for tutor (OK)
* tutor don't know who is reserved a lesson (find in studentlesson the lesson's id)
* add notify in student (embeddsmany)(OK)
* Test serach
*  Security Json https://docs.angularjs.org/api/ng/service/$http
* Redirect signin add auto username/email and password
* hidden/disable path after verification (redirect in page with log in ?)
* Delete a cascata {https://github.com/strongloop/loopback-datasource-juggler/issues/88}.
* provare (vedi university student) hasMany  -> belongsTo) https://github.com/strongloop/loopback/issues/1229 query multi model
____________________________________________________________________________________________________________
* student post passpartout sovrascrive il vecchio pass inserire funzione in before save per aggioarnare la data
* student passpartout come inviare la data di scadenza? (!important) (criptare richiesta?)(nascondere nel response passpartout)
* embedds bug per mongo idInjection https://github.com/strongloop/loopback/issues/2302 (in attesa di soluzione)
* embedds bug per hook https://github.com/strongloop/loopback-datasource-juggler/issues/480

* aggiunto acl in university per  provare la get con student (rivedere gli acl alla fine)

+ aggiungere feedbacks di un tuor per un determinato corso con un determinato professore,
    problemi:
     - [ ] feeback si riferisce al corso quindi si perdono i dati del corso e del  professore nel momento in cui viene eliminata una lezione.
     - [ ] I feedback sono generici
