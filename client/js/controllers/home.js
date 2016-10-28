define(['app'], function(app){
'use-strict';
    app.controller('homeCtrl', ['$scope', '$state', '$controller', function($scope, $state, $controller){
        var parentController = $controller('BaseController', {$scope: $scope});

        $scope.loadView = parentController.loadView;
        $scope.mobile = (document.documentElement.clientWidth <= 568) ? '../../images/mobilemain1.jpg' : '../../images/main.gif';
        /*Aggiungere toogle*/
        
}]);
});
