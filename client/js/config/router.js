define(['app', 'providers/lazyload'], function (app) {
  'use-strict';
  var FRONT_PATH = "views/frontend/";
  var ASSETS_PATH = "css/templates/";
  var ROUTES = {
    "home": null,
    "signin": null,
    "signup": null,
    "verify": null
  };
  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'lazyLoadProvider', function ($stateProvider,
    $urlRouterProvider, $locationProvider, lazyLoadProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/home');
    angular.forEach(ROUTES, function (value, key) {
      $stateProvider.state(key, {
        url: '/' + key,
        templateUrl: FRONT_PATH + key + '.html',
        controller: key + 'Ctrl',
        controllerAs: key,
        data: { css: ASSETS_PATH + key + '.css' },
        resolve: lazyLoadProvider.resolve(key),
        parent: value
      });
    });
  }]);
  app.run(['$rootScope', 'lazyLoad', '$state', function ($rootScope, lazyLoadProvider) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
      lazyLoadProvider.cssHandler(fromState, toState);
    });
  }]);
});
