angular.module('app')
    .controller('SignInCtrl', ['$scope', 'Student', '$state', function($scope, Student){
        $scope.log = function(){
          Student.login({
            email: $scope.formLogin.user,
            password: $scope.formLogin.password,
            ttl: 60 * 60
            }).$promise
          .then(function(user){
            console.log(user);
          });
        };
}]);