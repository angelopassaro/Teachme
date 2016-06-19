angular.module('app')
    .controller('HomeCtrl', ['$scope', '$state', function($scope, $state){
        $scope.logRef = function(){
            console.log($scope);
            $state.go('login');
            console.log("Routed Successfully!");
        };
}]);