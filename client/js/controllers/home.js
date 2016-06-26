angular.module('app')
    .controller('HomeCtrl', ['$scope', '$state', function($scope, $state){
        $scope.logRef = function(state){
            $state.go(state);
            console.log("Routed Successfully!");
        };
}]);