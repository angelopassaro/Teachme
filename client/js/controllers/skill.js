define(['app'], function(app){
  app.controller('SkillCtrl', ['$scope', '$state', 'Student', 'Lesson', 'Course',
    function($scope, $state, Student, Lesson, Course){
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
  }]);
});
