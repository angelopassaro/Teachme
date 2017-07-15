(function(){
define(['app', 'services/date-services'], function(app){
  'use-strict';
  app.controller('userCtrl', userCtrl); 
  userCtrl.$inject = ['$scope', '$state', 'Student', '$date']; 
  function userCtrl($scope, $state, Student, $date){
    var user = this;
    
  }

   /* $scope.Date = $scope.Date || {};
    $scope.loadView = parentController.loadView;
    $scope.years = dateService.range(1970, 2016);
    $scope.months = dateService.createMonths();
    $scope.days = dateService.range(1, 31);
    $scope.verify = ($scope.Contact.type === 'Mail') ? app.MAIL_PATTERN : app.PHONE_PATTERN;


    
      Student.findById({id: Student.getCurrentId()}, function(student){
        jsonDate = dateService.parseDate(student.birthday);
          $scope.Student.name = student.name;
          $scope.Student.lastName = student.lastName;
          $scope.Student.birthday = dateService.isoDate(student.birthday, 0);
          $scope.Student.email = student.email;
          $scope.Student.contacts = student.contacts;
          $scope.Date.year = jsonDate.year;
          $scope.Date.month = $scope.months[jsonDate.month - 1];
          $scope.Date.day = $scope.days[jsonDate.day - 1];
      }, parentController.handleError);

    $scope.updateUser = function(){
      $scope.Student.birthday = new Date(Date.UTC($scope.Date.year, $scope.months.indexOf($scope.Date.month), 
        $scope.Date.day));
      Student.prototype$updateAttributes({id: Student.getCurrentId()}, $scope.Student).$promise
        .then(function(success){
          parentController.loadView('user', true);
        }, parentController.handleError);
    };

    $scope.addContact = function(){
      var newObject = {}
      newObject[$scope.Contact.type] = $scope.Contact.name;
      $scope.Student.contacts.push(newObject);
    };

    $scope.removeContact = function(index){
      console.log(index);
      delete $scope.Student.contacts[index];
    };*/

});
})();
