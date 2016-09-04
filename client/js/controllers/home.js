define(['app'], function(app){
'use-strict';
    app.controller('HomeCtrl', ['$scope', '$state', '$controller', function($scope, $state, $controller){
        angular.extend(this, $controller('BaseController', {$scope: $scope, $state: $state}));

        $scope.loadView = this.loadView;

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
