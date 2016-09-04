define(['app'], function (app) {
  'use-strict';
  app.controller('PlatformCtrl', ['$scope', '$state', '$controller', 'Student', function ($scope, $state,
    $controller, Student) {
    var parentController = $controller('BaseController', {$scope: $scope});

    $scope.loadView = parentController.loadView;

    $scope.logout = function () {
      Student.logout().$promise.then(function () {
        parentController.loadView('home');
      }, parentController.handleError);
    };

    $scope.showCommandMenu = function () {
      var menu = angular.element(document.getElementsByClassName('menu__ul')[0]);
      if (menu.css('display') === 'none') {
        menu.css('display', 'block');
      } else {
        menu.css('display', 'none');
      }
    };

  }]);
});
