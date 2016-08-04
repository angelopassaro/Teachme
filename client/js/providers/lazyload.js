'use-strict';
define(['app'], function(app){
  app.provider('lazyLoad', function(){
    this.$get = function(){ return this;};
    this.resolve = function(controllerName){
      return {injectedController: ['$q', function($q){
        var deffered = $q.defer();
        require(["controllers/"+controllerName], function(){
          deffered.resolve();
          });
        return deffered.promise;
        }]};
    };
  });
});