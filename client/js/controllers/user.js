define(['app', 'services/date-services'], function(app){
  'use-strict';
  app.controller('UserCtrl', ['$scope', '$state', 'Student', 'dateService', function($scope, $state, Student, dateService){
    $scope.Student = $scope.Student || {};
    $scope.Date = $scope.Date || {};
    $scope.years = dateService.range(1970, 2016);
    $scope.months = dateService.createMonths();
    $scope.days = dateService.range(1, 31);

      Student.findById({id: Student.getCurrentId()})
        .$promise.then(function(student){
          jsonDate = dateService.parseDate(student.birthday);
          $scope.Student.name = student.name;
          $scope.Student.lastName = student.lastName;
          $scope.Student.birthday = dateService.isoDate(student.birthday, 0);
          $scope.Student.email = student.email;
          $scope.Student.contacts = student.contacts;
          $scope.Date.year = jsonDate.year;
          $scope.Date.month = $scope.months[jsonDate.month - 1];
          $scope.Date.day = $scope.days[jsonDate.day - 1];
        }, function(error){console.log(error);});

    $scope.editUser = function(){
      $state.go('edituser');
    };

    $scope.updateUser = function(){
      $scope.Student.birthday = new Date(Date.UTC($scope.Date.year, $scope.months.indexOf($scope.Date.month), $scope.Date.day));
      Student.prototype$updateAttributes({id: Student.getCurrentId()}, $scope.Student).$promise
        .then(function(success){
          console.log(success);
        }, function(error){
          console.log(error);
        });
    };
    }]);
});
