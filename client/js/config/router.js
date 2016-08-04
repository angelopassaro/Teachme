define(['app', 'providers/lazyload'], function(app){
  'use-strict';
  var FRONT_PATH = "views/frontend";
  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'lazyLoadProvider', function($stateProvider,
                $urlRouterProvider, $locationProvider, lazyLoadProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: FRONT_PATH + '/home.html',
          controller: 'HomeCtrl',
          resolve: lazyLoadProvider.resolve('home')
      })
        .state('signin', {
          url: '/signin',
          templateUrl: FRONT_PATH + '/signin.html',
          controller: 'SigninCtrl',
          resolve: lazyLoadProvider.resolve('signin')
      })
        .state('signup', {
         url: '/signup',
         templateUrl: FRONT_PATH + '/signup.html',
         controller: 'SignupCtrl',
         resolve: lazyLoadProvider.resolve('signup')
      })
        .state('signup-success', {
         url: '/verifyemail',
         templateUrl: FRONT_PATH + '/verify.html'
      })
        .state('platform', {
         url: '/platform',
         templateUrl: FRONT_PATH + '/platform.html',
         controller: 'PlatformCtrl',
         resolve: lazyLoadProvider.resolve('platform')
      })
        .state('platform.user', {
         url: '/user',
         templateUrl: FRONT_PATH + '/userhome.html',
         controller: 'UserCtrl',
         resolve: lazyLoadProvider.resolve('user')
      })
        .state('platform.edituser', {
         url: '/edit/user',
         templateUrl: FRONT_PATH + '/edituser.html',
         controller: 'UserCtrl',
         resolve: lazyLoadProvider.resolve('user')
      })
        .state('platform.skill', {
          url: '/skill',
          templateUrl: FRONT_PATH + '/myskill.html',
          controller: 'SkillCtrl',
          resolve: lazyLoadProvider.resolve('skill')
        });
  }]);
});