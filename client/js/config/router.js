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
        .state('user', {
         url: '/user',
         parent: 'platform',
         templateUrl: FRONT_PATH + '/userhome.html',
         controller: 'UserCtrl',
         resolve: lazyLoadProvider.resolve('user')
      })
        .state('edituser', {
         url: '/edit',
         parent: 'user',
         templateUrl: FRONT_PATH + '/edituser.html',
         controller: 'UserCtrl',
         resolve: lazyLoadProvider.resolve('user')
      })
        .state('skill', {
          url: '/skills',
          parent: 'platform',
          templateUrl: FRONT_PATH + '/myskill.html',
          controller: 'SkillCtrl',
          resolve: lazyLoadProvider.resolve('skill')
        })
        .state('editskill', {
          url: '/edit',
          parent: 'skill',
          templateUrl: FRONT_PATH + '/editskill.html',
          controller: 'SkillCtrl',
          resolve: lazyLoadProvider.resolve('skill')
        });
  }]);
  app.run(['$rootScope', 'lazyLoad', function($rootScope, lazyLoadProvider){
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options){
      if(fromState.name === toState.parent){/*Da padre a figlio*/
        if(fromState.data.css !== toState.data.css){
          lazyLoadProvider.injectCSS(toState.data.css);
        }
      } else if (fromState.parent === toState.name) { /*Da figlio a padre*/
          lazyLoadProvider.injectCSS(fromState.data.css);
      } else{
         if(fromState.data !== undefined){
          lazyLoadProvider.injectCSS(toState.data.css);
          lazyLoadProvider.removeCSS(fromState.data.css);
        }else {
          lazyLoadProvider.injectCSS(toState.data.css);
        }
      }
    });
  }]);
});
