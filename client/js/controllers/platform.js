angular.module('app')
  .controller('PlatformCtrl', ['$scope', 'Student', '$state', 'tutorService',
    function($scope, Student, $state, tutorService){
      $scope.Student = $scope.Student || {};
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
            $scope.Student.year = jsonDate.year;
            $scope.Student.month = $scope.months[jsonDate.month - 1];
            $scope.Student.day = $scope.days[jsonDate.day - 1];
            console.log(jsonDate);
          });
        }else {
          console.log("non autenticato");
        }
        
      };
}]);