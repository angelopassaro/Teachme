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
      var elem = document.getElementsByClassName('menu__ul')[0];
      elem.style.display = (elem.style.display === 'none') ? 'block' : 'none';
    };

  }]);
});
