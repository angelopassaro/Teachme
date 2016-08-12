define(['app'], function(app){
  app.controller('PlatformCtrl', ['$scope', '$state', 'Student', 'cssInjector', function($scope, $state, Student, cssInjector){
    cssInjector.add($state.current.data.css);
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

  }]);
});
