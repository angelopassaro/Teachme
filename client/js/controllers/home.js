define(['app'], function(app){
'use-strict';
    app.controller('HomeCtrl', ['$scope', '$state', '$controller', function($scope, $state, $controller){
        var parentController = $controller('BaseController', {$scope: $scope});

        $scope.loadView = parentController.loadView;
        /*Aggiungere toogle*/
}]);
});
