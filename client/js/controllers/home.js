define(['app'], function(app){
'use-strict';
    app.controller('HomeCtrl', ['$scope', '$state', function($scope, $state){
        $scope.logRef = function(state){
            $state.go(state);
            console.log("Routed Successfully!");
        };
        
        $scope.showMenu = function(){
            var elem = document.getElementById('menu');
            elem.style.display = (elem.style.display === 'none') ? 'block' : 'none';
        };
}]);
});

