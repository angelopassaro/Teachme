(function () {
    define(['app'], function (app) {
        'use-strict';
        app.controller('BaseController', ['$state', function ($state) {

            this.handleError = function (error) {
                console.error("Error from Resource:", error);
            };

            this.loadView = function (toState, refresh) {
                if (refresh === true)
                    $state.go(toState, {}, { reload: refresh });
                else
                    $state.go(toState);
            };
        }]);
    });
})();