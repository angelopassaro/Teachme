require.config({
  baseUrl : "./js",
  paths : {
    'angular': '../vendor/node_modules/angular/angular.min',
    'angular-resource': '../vendor/node_modules/angular-resource/angular-resource.min',
    'angular-router': '../vendor/node_modules/angular-ui-router/release/angular-ui-router.min',
    'app-router': './config/router',
    'loopback': './services/lb-services',
    'animation': '../vendor/node_modules/angular-animate/angular-animate.min',
    'loading-bar': '../vendor/node_modules/angular-loading-bar/build/loading-bar.min'
  },
  shim : {
    'angular': {exports: 'angular'},
    'angular-router': {deps: ['angular']},
    'angular-resource': {deps: ['angular']},
    'loopback': {deps: ['angular', 'angular-resource']},
    'app-router': {deps: ['angular-router']},
    'animation': {deps: ['angular']},
    'loading-bar': {deps: ['animation']}
  },
  priority: ['angular']
});

require(['app', 'app-router'], function(){
  angular.bootstrap(document, ['app']);
});
