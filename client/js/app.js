define(['angular-router', 'loopback'],function(){
  'use-strict';
  var app = angular.module("app", ['ui.router', 'lbServices']);
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