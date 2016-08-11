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
          css: 'css/home.css',
          resolve: lazyLoadProvider.resolve('home')
      })
        .state('signin', {
          url: '/signin',
          templateUrl: FRONT_PATH + '/signin.html',
          controller: 'SigninCtrl',
          css: 'css/signin.css',
          resolve: lazyLoadProvider.resolve('signin')
      })
        .state('signup', {
         url: '/signup',
         templateUrl: FRONT_PATH + '/signup.html',
         controller: 'SignupCtrl',
         css: 'css/signup.css',
         resolve: lazyLoadProvider.resolve('signup')
      })
        .state('signup-success', {
         url: '/verifyemail',
         templateUrl: FRONT_PATH + '/verify.html',
         css: 'css/verify.css'
      })
        .state('platform', {
         url: '/platform',
         templateUrl: FRONT_PATH + '/platform.html',
         controller: 'PlatformCtrl',
         css: 'css/platform.css',
         resolve: lazyLoadProvider.resolve('platform')
      })
        .state('platform.user', {
         url: '/user',
         templateUrl: FRONT_PATH + '/userhome.html',
         controller: 'UserCtrl',
         css: 'css/platform.css',
         resolve: lazyLoadProvider.resolve('user')
      })
        .state('platform.edituser', {
         url: '/edit/user',
         templateUrl: FRONT_PATH + '/edituser.html',
         controller: 'UserCtrl',
         css: 'css/platform.css',
         resolve: lazyLoadProvider.resolve('user')
      })
        .state('platform.skill', {
          url: '/skill',
          templateUrl: FRONT_PATH + '/myskill.html',
          controller: 'SkillCtrl',
          css: 'css/platform.css',
          resolve: lazyLoadProvider.resolve('skill')
        })
        .state('platform.skill.edit', {
          url: '/edit',
          templateUrl: FRONT_PATH + '/editskill.html',
          controller: 'SkillCtrl',
          css: 'css/platform.css',
          resolve: lazyLoadProvider.resolve('skill')
        });
  }]);
});
