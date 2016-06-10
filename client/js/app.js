'use-strict';

angular.module('app', ['lbServices', 'ui.router', 'ngResource']).config(['$stateProvider',
    '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'index.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        });
        //$urlRouterProvider.otherwise('home');
}]);