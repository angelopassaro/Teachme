require.config({
  baseUrl : "./js",
  paths : {
    'angular': '../vendor/angular/angular',
    'angular-resource': '../vendor/angular-resource/angular-resource',
    'angular-router': '../vendor/angular-ui-router/release/angular-ui-router',
    'app-router': './config/router',
    'loopback': './services/lb-services',
    'angular-css': '../vendor/angular-css/angular-css'
  },
  shim : {
    'angular': {exports: 'angular'},
    'angular-router': {deps: ['angular']},
    'angular-resource': {deps: ['angular']},
    'loopback': {deps: ['angular', 'angular-resource']},
    'app-router': {deps: ['angular-router']},
    'angular-css': {deps: ['angular-router']}
  },
  priority: ['angular']
});

require(['app', 'app-router'], function(){
  angular.bootstrap(document, ['app']);
});
