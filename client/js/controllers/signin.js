(function () {
    define(['app'], function (app) {
        'use-strict';
        app.controller('signinCtrl', signinCtrl);

        signinCtrl.$inject = ['$scope', 'Student', '$state'];

        function signinCtrl($scope, Student, $state) {
            var signin = this;

            signin.log = function () {
                var request = {};
                request['ttl'] = 60 * 60;
                request['password'] = signin.password;
                var text = signin.logType;

                if (text.indexOf('@') === -1)
                    request['username'] = text;
                else
                    request['email'] = text;
            };
        }
    });
})();