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

###Back End
* Provare Convalida e-Mail
* Provare password dimenticata (api reset?)
* passpartout hasOne(in student)viene creato usando le API di student. +1
* passpartout belongsTo(in passpartout)viene creato usando le sue API ma bisogna definire un hook(before-save) per associarlo a uno student esistente.
* Aggiungere Feedback generico per calcolo
* Delete a cascata {https://github.com/strongloop/loopback-datasource-juggler/issues/88}.
* provare (vedi university student) hasMany  -> belongsTo) https://github.com/strongloop/loopback/issues/1229 query multi model
* Aggiungere controlli email e lunghezza caratteri stringhe. (input type?)(validatesPresence)


