(function () {
  define(['app'], function (app) {
    'use-strict';
    app.controller('platformCtrl', platformCtrl);

    platformCtrl.$inject = ['$scope', '$state', 'Student'];

    function platformCtrl($scope, $state, Student) {
      var platform = this;
      var layout = document.getElementById('layout');
      var menu = document.getElementById('menu');
      var menuLink = document.getElementById('menu-link');
      
      function toogleClass(element, className){
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;
            for(; i < length; i++) {
              if (classes[i] === className) {
                classes.splice(i, 1);
                break;
              }
            }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
      }

      platform.showMenu = function($event){
        var active = 'active';
        $event.preventDefault();
        toogleClass(layout, active);
        toogleClass(menu, active);
        toogleClass(menuLink, active);
      }
    }
  });
})();
