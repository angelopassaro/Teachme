define(['app', 'providers/lazyload'], function (app) {
  'use-strict';
  var FRONT_PATH = "views/frontend/";
  var ASSETS_PATH = "css/templates/";
  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'lazyLoadProvider', function ($stateProvider,
    $urlRouterProvider, $locationProvider, lazyLoadProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: FRONT_PATH + 'home.html',
      data: {css: ASSETS_PATH + 'home.css'},
      controller: 'homeCtrl',
      controllerAs: 'home',
      resolve: lazyLoadProvider.resolve('home')
    })
    .state('signin', {
      url: '/signin',
      templateUrl: FRONT_PATH + 'signin.html',
      data: {css: ASSETS_PATH + 'signin.css'},
      controller: 'signinCtrl',
      controllerAs: 'signin',
      resolve: lazyLoadProvider.resolve('signin')
    })
    .state('signup', {
      url: '/signup',
      templateUrl: FRONT_PATH + 'signup.html',
      data: {css: ASSETS_PATH + 'signup.css'},
      controller: 'signupCtrl',
      controllerAs: 'signup',
      resolve: lazyLoadProvider.resolve('signup')
    })
    .state('verify', {
      url: '/verify',
      templateUrl: FRONT_PATH + 'verify.html',
      data: {css: ASSETS_PATH + 'verify.css'},
      controller: 'verifyCtrl',
      controllerAs: 'verify',
      resolve: lazyLoadProvider.resolve('verify')
    })
    .state('platform', {
      url: '/platform',
      templateUrl: FRONT_PATH + 'platform.html',
      data: {css: ASSETS_PATH + 'platform.css'},
      controller: 'platformCtrl',
      controllerAs: 'platform',
      resolve: lazyLoadProvider.resolve('platform')
    })
    .state('user', {
      url: '/user',
      templateUrl: FRONT_PATH + 'user.html',
      parent: 'platform',
      controller: 'userCtrl',
      controllerAs: 'user',
      resolve: lazyLoadProvider.resolve('user')
    })
  }]);
  app.run(['$rootScope', 'lazyLoad', '$state', function ($rootScope, lazyLoadProvider) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
      lazyLoadProvider.cssHandler(fromState, toState);
    });
  }]);
});
 /*Viste interne dovrebbero ereditare resolve e data dal padre. Verificare...*/ 