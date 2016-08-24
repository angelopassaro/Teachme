define(['app'], function(app){
'use-strict';
    app.controller('HomeCtrl', ['$scope', '$state', function($scope, $state){

        $scope.logRef = function(state){
            $state.go(state);
        };

        $scope.showMenu = function(){
            var elem = angular.element(document.getElementById('menu'));
            if(elem.css('display') === 'none'){
              elem.css('display', 'block');
            }else {
              elem.css('display', 'none');
            }
        };
}]);
});
