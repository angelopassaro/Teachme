**Tutor4You**

Platform for tutoring.

*Developed with:*

* [HTML5](https://it.wikipedia.org/wiki/HTML5)
* [CSS3](https://it.wikipedia.org/wiki/CSS)
* [ANGULARJS](https://it.wikipedia.org/wiki/AngularJS)
* [LOOPBACK](https://strongloop.com/node-js/loopback-framework/)

#TODO LIST

###Front End
* Fix images of home.html for mobile view
* Fix Nav bar click for tablet and mobile view
* Fix title for mobile view
* add animation for validate form into signup.html
* add cross-compatible select and checkbox
* add an index.css for reorganize style of page (!important)
* Create view, controllers and style for service page.
* signin.html change view
* add require.js for dynamic injection of javascript and css file
* add directives for sercurity form

---------------------------
* Clear user https://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK
--------------------------

###Back End
* Test email verification   (OK)
* Add login function (OK)
* Add logout (OK)
* Add a function for  resetpassword (OK)
* Delete an user not validated (OK)
* Delete old token (OK)
* Aggiungere controlli email e lunghezza caratteri stringhe. (OK)
* Start delete cascade user
* tutor don't know who is reserved a lesson (find in studentlesson the lesson's id)
* No delete a user with lesson ?
*  Re-email && hidden email page
*  Security Json https://docs.angularjs.org/api/ng/service/$http
* Redirect signin add auto username/email and password
* hidden/disable path after verification (redirect in page with log in ?)
* Delete a cascata {https://github.com/strongloop/loopback-datasource-juggler/issues/88}.
* provare (vedi university student) hasMany  -> belongsTo) https://github.com/strongloop/loopback/issues/1229 query multi model
* Aggiungere Feedback generico per calcolo
* cancellare loopback/common/example - > controllare directory
____________________________________________________________________________________________________________
* student post passpartout sovrascrive il vecchio pass inserire funzione in before save per aggioarnare la data
* student passpartout come inviare la data di scadenza? (!important) (criptare richiesta?)(nascondere nel response passpartout)
* embedds bug per mongo idInjection https://github.com/strongloop/loopback/issues/2302 (in attesa di soluzione)
* embedds bug per hook https://github.com/strongloop/loopback-datasource-juggler/issues/480
