(function () {
    define(['app'], function (app) {
        app.controller("verifyCtrl", verifyCtrl);
        verifyCtrl.$inject = ["$scope", "$state"];

        function verifyCtrl($scope, $state){
            var verify = this;
        }
    });
})();