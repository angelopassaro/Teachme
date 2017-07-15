(function () {
    define(['app'], function (app) {
        'use-strict';
        app.controller('homeCtrl', homeCtrl);

        homeCtrl.$inject = ['$scope', '$state'];

        function homeCtrl($scope, $state){
            var home = this;
            home.mobile = (document.documentElement.clientWidth <= 568) ? '../../images/mobilemain1.jpg' : '../../images/main.gif';
            
            home.loadView = function(toState){
                $state.go(toState);
            }
        }
    });
})();
