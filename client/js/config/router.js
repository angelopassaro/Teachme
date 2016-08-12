define(['app', 'providers/lazyload'], function(app){
  'use-strict';
  var FRONT_PATH = "views/frontend";
  var ASSETS_PATH = "css/template";
  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'lazyLoadProvider', function($stateProvider,
                $urlRouterProvider, $locationProvider, lazyLoadProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: FRONT_PATH + '/home.html',
          controller: 'HomeCtrl',
          data: {css: ASSETS_PATH + '/home.css'},
          resolve: lazyLoadProvider.resolve('home')
      })
        .state('signin', {
          url: '/signin',
          templateUrl: FRONT_PATH + '/signin.html',
          controller: 'SigninCtrl',
          data: {css: ASSETS_PATH + '/signin.css'},
          resolve: lazyLoadProvider.resolve('signin')
      })
        .state('signup', {
         url: '/signup',
         templateUrl: FRONT_PATH + '/signup.html',
         controller: 'SignupCtrl',
         data: {css: ASSETS_PATH + '/signup.css'},
         resolve: lazyLoadProvider.resolve('signup')
      })
        .state('signup-success', {
         url: '/verifyemail',
         templateUrl: FRONT_PATH + '/verify.html',
      })
        .state('platform', {
         url: '/platform',
         templateUrl: FRONT_PATH + '/platform.html',
         controller: 'PlatformCtrl',
         data: {css: ASSETS_PATH + '/platform.css'},
         resolve: lazyLoadProvider.resolve('platform')
      })
        .state('platform.user', {
         url: '/user',
         templateUrl: FRONT_PATH + '/userhome.html',
         controller: 'UserCtrl',
         resolve: lazyLoadProvider.resolve('user')
      })
        .state('platform.user.edit', {
         url: '/edit',
         templateUrl: FRONT_PATH + '/edituser.html',
         controller: 'UserCtrl',
         resolve: lazyLoadProvider.resolve('user')
      })
        .state('platform.skill', {
          url: '/skill',
          templateUrl: FRONT_PATH + '/myskill.html',
          controller: 'SkillCtrl',
          resolve: lazyLoadProvider.resolve('skill')
        })
        .state('platform.skill.edit', {
          url: '/edit',
          templateUrl: FRONT_PATH + '/editskill.html',
          controller: 'SkillCtrl',
          resolve: lazyLoadProvider.resolve('skill')
        });
  }]);
});
