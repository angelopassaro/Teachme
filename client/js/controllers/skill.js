define(['app'], function(app){
  'use-strict';
  app.controller('SkillCtrl', ['$scope', '$state', 'Student', 'Lesson', 'Course', 'University', 'Teacher',
    function($scope, $state, Student, Lesson, Course, University, Teacher){
      /*Initialization of scope Variables*/
      $scope.Skill = $scope.Skill || {};
      University.find(function(success){
        $scope.universities = success.map(function(data){ return data.id;});
      });

      $scope.getCourses = function(){
        University.offers({id: $scope.Skill.university}, function(success){
          $scope.courses = success.map(function(element){ return element.name;});
        });
      };

      $scope.getTeachers = function(){
        Course.toughtBy({id: $scope.Skill.course}, function(success){
          $scope.Skill.teacher = success.name + ' ' + success.lastName;
        });
      }
      /*Functions from API.*/
      $scope.getSkills = function(){
        var tutorSkills = [];
        Lesson.find({filter: {where: {studentId: Student.getCurrentId()}}}, function(lesson){
          lesson.map(function(value, index){
            var json = {};
            json.lesson = value;
            Course.findById({id: json.lesson.courseId},function(course){
              json.course = course;
              Course.toughtBy({id: json.course.id}, function(teacher){
                json.teacher = teacher;
                Student.university({id: Student.getCurrentId()}, function(university){
                  json.university = university;
                }, function(error){console.log(error);});
              }, function(error){ console.log(error)});
            }, function(error){console.log(error);});
            tutorSkills[index] = json;
          });
        }, function(error){console.log(error);});
        return tutorSkills;
      };


      $scope.editForm = function(index){
        for(var i=index; i<$scope.skills.length; i++){
           $scope.skills[i].visible = true;
         }
        $state.go('editskill');
        $scope.Skill.university = $scope.skills[index].university.id;
        $scope.Skill.course = $scope.skills[index].course.name;
        $scope.Skill.teacher = $scope.skills[index].teacher[0].name + ' ' + $scope.skills[index].teacher[0].lastName;
        $scope.Skill.price = $scope.skills[index].lesson.totalPrice;
        $scope.Old = $scope.skills[index];
      };

      $scope.editSkill = function(){
        University.findById({id: $scope.Old.university.id}, function(university){
          university.id = $scope.Skill.university;
          University.prototype$updateAttributes({id: $scope.Old.university.id}, university);
        }, function(error){ console.log(error); });
        Teacher.findById({id: $scope.Old.teacher[0].id}, function(teacher){
          teacher.name = $scope.Skill.teacher.split(' ')[0];
          teacher.lastName = $scope.Skill.teacher.split(' ')[1];
          Teacher.prototype$updateAttributes({id: teacher.id}, teacher);
        }, function(error){ console.log(error); });
        Course.findById({id: $scope.Old.course.id}, function(course){
          course.name = $scope.Skill.course;
          Course.prototype$updateAttributes({id: course.id}, course);
        }, function(error){ console.log(error); });
        Lesson.findById({id: $scope.Old.lesson.id}, function(lesson){
          lesson.totalPrice = $scope.Skill.price;
          Lesson.prototype$updateAttributes({id: lesson.id}, lesson);
        }, function(error){ console.log(error);});
      };

      $scope.createForm = function(){
        $state.go('newskill');
      };
  }]);
});
