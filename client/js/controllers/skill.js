define(['app', 'services/date-services'], function (app) {
  'use-strict';
  app.controller('SkillCtrl', ['$scope', '$controller', '$state', 'Student', 'Lesson', 'Course', 'University', 'Teacher', 'dateService',
    function ($scope, $controller, $state, Student, Lesson, Course, University, Teacher, dateService) {
      /*Initialization of scope Variables*/
      var parentController = $controller('BaseController', { $scope: $scope });
      $scope.Skill = $scope.Skill || {};
      $scope.loadView = parentController.loadView;
      University.find(function (universities) {
        $scope.universities = universities.map(function (value) {
          return value.id;
        });
      }, parentController.handleError);

      $scope.getCourses = function () {
        University.offers({ id: $scope.Skill.university }, function (courses) {
          $scope.courses = courses.map(function (value) {
            return value.name;
          });
        }, parentController.handleError);
      };

      $scope.getTeachers = function () {
        University.offers({ id: $scope.Skill.university, filter: { where: { name: $scope.Skill.course } } }, function (course) {
          Course.toughtBy({ id: course[0].id }, function (teacher) {
            $scope.teachers = teacher.map(function (value) {
              return value.name + ' ' + value.lastName;
            })
          }, parentController.handleError);
        });
      }

      /*Functions from API.*/
      $scope.getSkills = function () {
        var tutorSkills = [];
        Lesson.find({ filter: { where: { studentId: Student.getCurrentId() } } }, function (lesson) {
          lesson.map(function (value, index) {
            var json = {};
            json.lesson = value;
            Course.findById({ id: json.lesson.courseId }, function (course) {
              json.course = course;
              Teacher.findById({ id: json.lesson.belongsId }, function (teacher) {
                json.teacher = teacher;
                Student.university({ id: Student.getCurrentId() }, function (university) {
                  json.university = university;
                }, parentController.handleError);
              }, parentController.handleError);
            }, parentController.handleError);
            tutorSkills[index] = json;
          });
        }, parentController.handleError);
        return tutorSkills;
      };


      $scope.editForm = function (index) {
        var right = index;
        var left = index;
        while (right < $scope.skills.length) {
          $scope.skills[right].visible = true;
          right++;
        }
        while (left >= 0) {
          $scope.skills[left].visible = true;
          left--;
        }
        parentController.loadView('editskill');
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

      $scope.editSkill = function () {
        Lesson.findById({ id: $scope.Old.lesson.id }, function (lesson) {
          lesson.totalPrice = $scope.Skill.price;
          lesson.dateLesson = new Date(Date.UTC($scope.Skill.year, $scope.months.indexOf($scope.Skill.month), $scope.Skill.day));
          console.log(lesson.dateLesson);
          Lesson.prototype$updateAttributes({ id: lesson.id }, lesson).$promise
            .then(function (success) {
              parentController.loadView('skill', true);
            }, parentController.handleError);
        }, parentController.handleError);
      };

      $scope.createSkill = function () {
        var newLesson = {};
        newLesson['dateLesson'] = dateService.goIntoFuture(new Date(), 1);
        newLesson['startLesson'] = dateService.goIntoFuture(new Date(), 1);
        newLesson['duration'] = $scope.Skill.duration;
        newLesson['studentId'] = Student.getCurrentId();
        newLesson['totalPrice'] = $scope.Skill.price;
        University.offers({ id: $scope.Skill.university, filter: { where: { name: $scope.Skill.course } } }, function (course) {
          newLesson['courseId'] = course[0].id;
          Course.toughtBy({
            id: course[0].id, filter: {
              where: {
                name: $scope.Skill.teacher.split(' ')[0],
                lastName: $scope.Skill.teacher.split(' ')[1]
              }
            }
          }, function (teacher) {
            newLesson['belongsId'] = teacher[0].id;
            Lesson.create(newLesson).$promise.then(function (success) {
              parentController.loadView('skill', true);
            }, parentController.handleError);
          }, parentController.handleError);
        }, parentController.handleError);
      };

      $scope.deleteLesson = function (index) {
        Lesson.deleteById({ id: $scope.skills[index].lesson.id }, function (result) {
          $state.reload();
        }, parentController.handleError);
      };
    }]);
});
