angular.module('app')
  .controller('PlatformCtrl', ['$scope', 'Student', 'Lesson', 'Course', 'University',  '$state', 'tutorService',
    function($scope, Student, Lesson, Course, University, $state, tutorService){
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
        Student.prototype$updateAttributes({id: Student.getCurrentId()}, $scope.Student).$promise
          .then(function(succ){
            console.log(succ);
            });
      };
      
      
      $scope.loadSkill = function(){
        $state.go('signin-success.myskill');
        var skill = {};
        skill.course = [];
        skill.teacher = [];
        skill.university = [];
        skill.lesson = [];
        /*Capito come fare chiamare a scatole cinesi*/
        function fillJSON(i, lesson){
          skill.lesson[i] = lesson[i];  
            Course.findById({id: skill.lesson[i].courseId}, function(course){
              skill.course[i] = course;
            }, function(error){
                console.log(error);
            });
            Course.toughtBy(skill.course[i].id, function(teacher){
              skill.teacher[i] = teacher;
              }, function(error){
              console.log(error);
              });
            Student.university({id: Student.getCurrentId()}, function(university){
              skill.university[i] = university;
              }, function(error){
                console.log(error);
            });
        }
        Lesson.find({filter: {where: {studentId: Student.getCurrentId()}}}, function(lesson){
          for(var i=0; i<=lesson.length; i++){
            fillJSON(i, lesson);
          }
           console.log(skill);
          },function(error){
            console.log(error);
        });
      };
      
      $scope.logout = function(){
        Student.logout().$promise.then(function(){
          $state.go('home');
        });
      };
      
}]);