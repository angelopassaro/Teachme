angular.module('app')
    .controller('SignInCtrl', ['$scope', 'Student', '$state', function($scope, Student, $state){
        $scope.log = function(){
          Student.login({
            email: $scope.formLogin.user,
            password: $scope.formLogin.password,
            ttl: 60 * 60
            }).$promise.then(function success(){
            $state.go('signin-success');
            }, function err(error){
                console.log(error);
            });
        };
}]);