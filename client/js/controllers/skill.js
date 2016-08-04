define(['app'], function(app){
  app.controller('SkillCtrl', ['$scope', '$state', 'Student', 'Lesson', 'Course',
    function($scope, $state, Student, Lesson, Course){
      $scope.getSkills = function(){
        var skills = [];
        Lesson.find({filter: {where: {studentId: Student.getCurrentId()}}},
          function(lessons){
            for(var i=0; i<lessons.length; i++){
              json = {};
              fillJSON(json, lessons[i]);
              $scope.skills[i] = json;
            }
            console.log(skills);
            },
            function(error){
              console.log(error);
            });
        return skills;
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
  }]);
});