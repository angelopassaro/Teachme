define(['app'], function(app) {
    'use strict';
    app.controller('PrenotationCtrl', ['$scope', '$state', 'Student', 'Course', 'Teacher', function($scope, 
        $state, Student, Course, Teacher){
        
        $scope.getPrenotations = function(){
            var prenotations = [];
            Student.require({id: Student.getCurrentId()}, function(prenotations){
                prenotations.map(function(value, index){
                    var json = {};
                    Student.findById({id: value.studentId}, function(student){
                        json.tutor = student.name + ' ' + student.lastName; 
                    });
                    json.course = Course.findById({id: value.courseId});
                    json.teacher = Teacher.findById({id: value.belongsId});
                    json.date = value.dateLesson;
                    json.duration = value.duration;
                    json.price = value.totalPrice;
                    json.total = (json.duration / 60) * json.price;
                    prenotations[index] = json;
                });
                return prenotations;
            }, function(error){ console.log(error);});
        };

    }]);
});