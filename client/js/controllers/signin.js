angular.module('app')
    .controller('SignInCtrl', ['$scope', 'Student', '$state', function($scope, Student){
        $scope.log = function(){
          $scope.formLogin.ttl = 60 * 60;
          Student.login($scope.formLogin).$promise
          .then(function(user){
            console.log(user);
          });
        };
}]);