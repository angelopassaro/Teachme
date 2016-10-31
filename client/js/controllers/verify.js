define(['app'], function(app){
    app.controller("verifyCtrl", ["$scope", "$controller", "$state", function($scope, $controller, $state){
        var parentController = $controller("BaseController", {$scope: $scope});

    }]);
});