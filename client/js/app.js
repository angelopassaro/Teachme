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
  app.constant("TEXT_PATTERN", "\\w*");
  app.constant("PASSWD_PATTERN", "^[a-zA-Z]\w{5,10}$");
  app.constant("EMAIL_VALIDATOR", "\\w*.\\w+\\d@\\w*.unisa.it");
  return app;
});
