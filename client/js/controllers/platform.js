define(['app'], function(app){
  'use-strict';
  app.controller('PlatformCtrl', ['$scope', '$state', 'Student', function($scope, $state, Student){
    $scope.loadView = function(state){
      $state.go(state);
    };

    $scope.logout = function(){
      Student.logout().$promise.then(function(){
        $state.go('home');
      }, function(error){
        console.log(error);
      });
    };

    $scope.showCommandMenu = function(){
      var menu = angular.element(document.getElementsByClassName('menu__ul')[0]);
      if(menu.css('display') === 'none'){
        menu.css('display', 'block');
      }else {
        menu.css('display', 'none');
      }
    };

  }]);
});
