define(['angular-router', 'loopback', 'angular-css'],function(){
  'use-strict';
  var app = angular.module("app", ['ui.router', 'lbServices', 'angularCSS']);
  app.config(['$controllerProvider', '$compileProvider', '$filterProvider','$provide',
              function($controllerProvider, $compileProvider, $filterProvider,$provide){
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
            }]);
  return app;
});
