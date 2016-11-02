(function () {
    'use-strict';
    define(['app'], function (app) {
        app.service('utilService', utilService);
        utilService.$inject = ['$state'];
        function utilService($state) {
            this.handleError = function (error) {
                console.error("error from Resource:", error);
            };

            this.loadView = function (toState, refresh) {
                if (refresh === true)
                    $state.go(toState, {}, { reload: refresh });
                else
                    $state.go(toState);
            };
        }
    });
})();