define(['app'], function(app){
  'use-strict';
  app.controller('TutorCtrl', ['$scope', '$state', function($scope, $state){
    $scope.getTutors = function(){
      return [];
    };
  }]);
});
