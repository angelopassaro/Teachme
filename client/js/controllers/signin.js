(function () {
    define(['app'], function (app) {
        'use-strict';
        app.controller('SigninCtrl', ['$scope', 'Student', '$state', '$controller', function ($scope, Student,
            $state, $controller) {
            var parentController = $controller('BaseController', { $scope: $scope });
            /*Student API*/

            $scope.log = function () {
                $scope.formLogin.ttl = 60 * 60;
                var logType = $scope.formLogin.user;
                delete $scope.formLogin.user;
                
                if (logType.indexOf('@') === -1) 
                    $scope.formLogin.username = logType;
                else 
                    $scope.formLogin.email = logType;

                Student.login($scope.formLogin).$promise.then(function (success) {
                    parentController.loadView('platform', false);
                }, parentController.handleError);
            };
        }]);
    });
})();
