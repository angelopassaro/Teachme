(function () {
  'use-strict';
  define(['app'], function (app) {
    app.provider('lazyLoad', function () {
      this.$get = function () { return this; };
      this.resolve = function (controllerName) {
        return {
          injectedController: ['$q', function ($q) {
            var deffered = $q.defer();
            require(["controllers/" + controllerName], function () {
              deffered.resolve();
            });
            return deffered.promise;
          }]
        };
      };

      this.injectCSS = function (cssPath) {
        var head = angular.element(document.getElementsByTagName('head')[0]);
        var links = angular.element(document.getElementsByTagName('link'));
        var absolutePath = window.location.origin + '/' + cssPath;
        for (var i = 0; i < links.length; i++) {
          if (links[i].href === absolutePath) {
            return;
          }
        }
        head.append("<link rel='stylesheet' href=" + cssPath + " />");
      };

      this.removeCSS = function (cssPath) {
        var links = angular.element(document.getElementsByTagName('link'));
        var absolutePath = window.location.origin + '/' + cssPath;
        for (var i = 0; i < links.length; i++) {
          if (links[i].href === absolutePath) {
            links[i].remove();
          }
        }
      };

      this.cssHandler = function (fromState, toState) {
        if (fromState.data == null)
          this.injectCSS(toState.data.css);
        else
          this.removeCSS(fromState.data.css);
        this.injectCSS(toState.data.css);
      };
    });
  });
})();

