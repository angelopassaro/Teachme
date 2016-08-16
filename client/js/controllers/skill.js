define(['app'], function(app){
  'use-strict';
  app.controller('SkillCtrl', ['$scope', '$state', 'Student', 'Lesson', 'Course', 'University',
    function($scope, $state, Student, Lesson, Course, University){
      $scope.Skill = $scope.Skill || {};
      $scope.visible = [];
      $scope.getSkills = function(){
        var tutorSkills = [];
        Lesson.find({filter: {where: {studentId: Student.getCurrentId()}}},
          function(lessons){
            for(var i=0; i<lessons.length; i++){
              json = {};
              fillJSON(json, lessons[i]);
              tutorSkills[i] = json;
            }
            },
            function(error){
              console.log(error);
            });
        return tutorSkills;
      };

      fillJSON = function(json, lesson){
        json['lesson'] = lesson;
        Course.findById({id: json.lesson.courseId},
            function(course){
              json['course'] = course;
              Course.toughtBy({id: json.course.id},
                function(teacher){
                  json['teacher'] = teacher;
                  Student.university({id: Student.getCurrentId()},
                    function(university){
                      json['university'] = university;
                      },
                      function(error){
                        console.log(error);
                      });
                },
                  function(error){
                    console.log(error);
                  });
            },
              function(error){
                console.log(error);
              });
      };

      $scope.editForm = function(index){
        for(var i=index; i<$scope.skills.length; i++){
           $scope.skills[i].visible = true;
         }
        $state.go('editskill');
        $scope.Skill.university = $scope.skills[index].university.name;
        $scope.Skill.course = $scope.skills[index].course.name;
        $scope.Skill.teacher = $scope.skills[index].teacher[0].name + ' ' + $scope.skills[index].teacher[0].lastName;
        $scope.Skill.price = $scope.skills[index].lesson.totalPrice;
      };

      $scope.editSkill = function(){
        Student.findById({id: Student.getCurrentId()}, function(student){
          University.findById({id: student.universityId}, function(university){
            University.offers({id: university.id}, function(course){
              Lesson.find({filter: {where: {studentId: Student.getCurrentId(), courseId: course.id}}}, function(lesson){
                lesson.price = $scope.Skill.price;
              }, function(error){console.log("Lesson FIND ERROR");});
              Course.toughtBy({id: course.id}, function(teacher){
                teacher.name = $scope.Skill.teacher.split(' ')[0];
                teacher.lastName = $scope.Skill.teacher.split(' ')[1];
                teacher.$save();
              }, function(error){console.log("Course TOUGHTBY ERROR");});
              course.name = $scope.Skill.course;
              course.$save();
            }, function(error){console.log("University OFFERS ERROR");});
            university.name = $scope.Skill.university;
            university.$save();
          }, function(error){console.log("University FINDBYID ERROR");});
        }, function(error){console.log("Student FINDBYID ERROR");});
      };
  }]);
});
