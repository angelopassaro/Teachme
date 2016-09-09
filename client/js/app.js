define(['angular-router', 'loopback', 'loading-bar', 'animation'],function(){
  'use-strict';
  var app = angular.module("app", ['ui.router', 'lbServices', 'angular-loading-bar' ,'ngAnimate']);
  app.config(['$controllerProvider', '$compileProvider', '$filterProvider','$provide',
              function($controllerProvider, $compileProvider, $filterProvider,$provide){
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
            }]);
  app.constant('PATTERNS', {
    'USERNAME_PATTERN': new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9_]{2,29}$/),
    'TEXT_PATTERN':  new RegExp("/^\w*$/"),
    'PASSWD_PATTERN':  new RegExp(/^[a-zA-Z]\w{5,10}$/),
    'EMAIL_VALIDATOR' : new RegExp(/^\\w*.\\w+\\d@\\w*.unisa.it$/),
    'PHONE_PATTERN': new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),
    'MAIL_PATTERN': new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  });
  return app;
});
