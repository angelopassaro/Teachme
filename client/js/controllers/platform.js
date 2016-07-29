angular.module('app')
  .controller('PlatformCtrl', ['$scope', 'Student', '$state', 'tutorService',
    function($scope, Student, $state, tutorService){
      $scope.Student = $scope.Student || {};
      $scope.Date = $scope.Date || {};
      $scope.years = tutorService.range(1970, 2016);
      $scope.months = tutorService.createMonths();
      $scope.days = tutorService.range(1, 31);
      $scope.loadUser = function(){
      if(Student.isAuthenticated()){
        $state.go('signin-success.platform-home');
        Student.findById({id: Student.getCurrentId()})
          .$promise.then(function(student){
            jsonDate = tutorService.parseDate(student.birthday);
            $scope.Student.name = student.name;
            $scope.Student.lastName = student.lastName;
            $scope.Student.birthday = tutorService.isoDate(student.birthday);
            $scope.Student.email = student.email;
            $scope.Student.contacts = student.contacts;
            $scope.Date.year = jsonDate.year;
            $scope.Date.month = $scope.months[jsonDate.month - 1];
            $scope.Date.day = $scope.days[jsonDate.day - 1];
          });
        }else {
          console.log("non autenticato");
        }
        
      };
      /*Attend to fix*/
      $scope.updateUser = function(){
        $scope.Student.birthday = new Date(Date.UTC($scope.Date.year,$scope.months.indexOf($scope.Date.month),$scope.Date.day));
        Student.prototype$updateAttributes($scope.Student).$promise.then(function(updatedStudent){
          console.log(updatedStudent);
          });
      };
      $scope.courses = Student.teach({id: Student.getCurrentId()});/*Manca altre query da fare*/
      $scope.loadSkill = function(){
        $state.go('signin-success.myskill');
      };
      
      $scope.logout = function(){
        Student.logout().$promise.then(function(){
          $state.go('home');
        });
      };
}]);