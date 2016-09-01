define(['app', 'services/date-services'], function(app){
  'use-strict';
  app.controller('SkillCtrl', ['$scope', '$state', 'Student', 'Lesson', 'Course', 'University', 'Teacher', 'dateService',
    function($scope, $state, Student, Lesson, Course, University, Teacher, dateService){
      /*Initialization of scope Variables*/
      $scope.Skill = $scope.Skill || {};
      University.find(function(universities){
        $scope.universities = universities.map(function(value){
          return value.id;
        });
      }, function(error){ console.log(error);});

      $scope.getCourses = function(){
        University.offers({id: $scope.Skill.university}, function(courses){
          $scope.courses = courses.map(function(value){
            return value.name;
          });
        }, function(error){ console.log(error); });
      };

      $scope.getTeachers = function(){
        University.offers({id: $scope.Skill.university, filter: {where: {name: $scope.Skill.course}}}, function(course){
          Course.toughtBy({id: course[0].id}, function(teacher){
            $scope.teachers = teacher.map(function(value){
              return value.name + ' ' + value.lastName;
            })
          }, function(error){ console.log(error); });
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
        var right = index;
        var left = index;
        while(right < $scope.skills.length){
          $scope.skills[right].visible = true;
          right++;
        }
        while(left >= 0){
          $scope.skills[left].visible = true;
          left--;
        }
        $state.go('editskill');
        $scope.Skill.university = $scope.skills[index].university.id;
        $scope.Skill.course = $scope.skills[index].course.name;
        $scope.Skill.teacher = $scope.skills[index].teacher[0].name + ' ' + $scope.skills[index].teacher[0].lastName;
        $scope.Skill.price = $scope.skills[index].lesson.totalPrice;
        $scope.months = dateService.createMonths();
        $scope.days = dateService.range(1, 31);
        var parsedDate = dateService.parseDate($scope.skills[index].lesson.dateLesson);
        $scope.Skill.day = parsedDate.day;
        $scope.Skill.month = $scope.months[parsedDate.month];
        $scope.Skill.year = parsedDate.year;
        $scope.Old = $scope.skills[index];
      };

      $scope.editSkill = function(){
        Lesson.findById({id: $scope.Old.lesson.id}, function(lesson){
          lesson.totalPrice = $scope.Skill.price;
          lesson.dateLesson = new Date(Date.UTC($scope.Skill.year, $scope.months.indexOf($scope.Skill.month), $scope.Skill.day));
          console.log(lesson.dateLesson);
          Lesson.prototype$updateAttributes({id: lesson.id}, lesson).$promise
            .then(function(success){
              $state.go('skill', {}, {reload: true});
            }, function(error){
              console.log(error);
            });
        }, function(error){ console.log(error);});
      };

      $scope.createForm = function(){
        $state.go('newskill');
      };

      $scope.createSkill = function(){
        University.offers({id: $scope.Skill.university, filter:{where: {name: $scope.Skill.course}}}, function(course){
          Lesson.create({studentId: Student.getCurrentId(), courseId: course[0].id,
            dateLesson: new Date(), startLesson: new Date(), duration: 0, totalPrice: $scope.Skill.price}, function(lesson){
              $state.go('skill');
            }, function(error){ console.log(error);});
        }, function(error){ console.log(error);});
      };

      $scope.deleteLesson = function(index){
        Lesson.deleteById({id: $scope.skills[index].lesson.id}, function(result){
          $state.reload();
        }, function(error){ console.log(error);});
      };
  }]);
});
