define(['app'], function (app) {
  'use-strict';
  app.controller('PlatformCtrl', ['$scope', '$state', '$controller', 'Student', function ($scope, $state,
    $controller, Student) {
    angular.extend(this, $controller('BaseController', { $scope: $scope, $state: $state }));

    $scope.loadView = this.loadView;

    $scope.logout = function () {
      Student.logout().$promise.then(function () {
        this.loadView('home');
      }, this.handleError);
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
