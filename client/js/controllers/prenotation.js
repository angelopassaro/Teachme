define(['app'], function(app) {
    'use strict';
    app.controller('PrenotationCtrl', ['$scope', '$state', 'Student', 'Course', function($scope, 
        $state, Student, Course){
        
        $scope.getPrenotations = function(){
            var prenotations = [];
            Student.require({id: Student.getCurrentId()}, function(prenotations){
                prenotations.map(function(value, index){
                    var json = {};
                    json.tutor = Student.findById({id: value.studentId});
                    json.course = Course.findById({id: value.courseId});
                    json.teacher = Course.toughtBy({id: value.courseId});
                    json.date = value.dateLesson
                });
            }, function(error){ console.log(error);});
        };
    }]);
});