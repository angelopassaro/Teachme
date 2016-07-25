angular.module('app')
    .controller('SignInCtrl', ['$scope', 'Student', '$state', function($scope, Student, $state){
        $scope.log = function(){
            $scope.formLogin.ttl = 60 * 60;
            var logType = $scope.formLogin.user;
            delete $scope.formLogin.user;
        if(logType.indexOf('@') == -1){
            $scope.formLogin.username = logType;
        }else {
            $scope.formLogin.email = logType;
        }
          Student.login($scope.formLogin).$promise.then(function success(){
            $state.go('signin-success');
            }, function err(error){
                console.log(error);
            });
        };
}]);

