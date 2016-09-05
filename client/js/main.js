require.config({
  baseUrl : "./js",
  paths : {
    'angular': '../vendor/angular/angular.min',
    'angular-resource': '../vendor/angular-resource/angular-resource.min',
    'angular-router': '../vendor/angular-ui-router/release/angular-ui-router.min',
    'app-router': './config/router',
    'base': './controllers/base',
    'loopback': './services/lb-services',
    'animation': '../vendor/angular-animate/angular-animate.min',
    'loading-bar': '../vendor/angular-loading-bar/build/loading-bar.min'
  },
  shim : {
    'angular': {exports: 'angular'},
    'angular-router': {deps: ['angular']},
    'angular-resource': {deps: ['angular']},
    'base': {deps: ['angular-router']},
    'loopback': {deps: ['angular', 'angular-resource']},
    'app-router': {deps: ['angular-router', 'base']},
    'animation': {deps: ['angular']},
    'loading-bar': {deps: ['animation']}
  },
  priority: ['angular']
});

require(['app', 'app-router'], function(){
  angular.bootstrap(document, ['app']);
});
