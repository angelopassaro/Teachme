define(['app'], function(app){
    app.controller('SigninCtrl', ['$scope', 'Student', '$state', 'cssInjector', function($scope, Student, $state, cssInjector){
      cssInjector.add($state.current.data.css);
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
            $state.go('platform');
            }, function err(error){
                console.log(error);
            });
        };
}]);
});
