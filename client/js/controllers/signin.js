(function () {
    define(['app'], function (app) {
        'use-strict';
        app.controller('signinCtrl', signinCtrl);

        signinCtrl.$inject = ['$scope', 'Student', '$state'];

        function signinCtrl($scope, Student, $state) {
            var signin = this;

            signin.log = function () {
                signin.UserForm.ttl = 60 * 60;
                var text = signin.UserForm.logType;
                delete signin.UserForm.logType;

                if (text.indexOf('@') === -1)
                    signin.UserForm.username = text;
                else
                    signin.UserForm.email = text;

                Student.login(signin.UserForm).$promise.then(function (success) {
                    $state.go('platform');
                }, function (error) { });
            };
        }
    });
})();