(function () {
	define(['app', 'services/date-services'], function (app) {
		'use-strict';
		app.controller('signupCtrl', signupCtrl);
		signupCtrl.$inject = ['$scope', 'PATTERNS', 'Student', '$state', '$date'];

		function signupCtrl($scope, PATTERNS, Student, $state, $date){
			var signup = this;
			signup.months = $date.createMonths();
			signup.years = $date.range(1970, 2016);
			signup.days = $date.range(1, 31);
			signup.createDays = function(){
				signup.UserForm.days = $date.checkDays(signup.UserForm.month, signup.UserForm.year);
			}

			signup.registration = function(){
				if (!$scope.Form.$valid) {
						return;
					}
					birth = new Date(Date.UTC($scope.Form.year, $scope.months.indexOf($scope.Form.month), $scope.Form.day));
					delete $scope.Form.year;
					delete $scope.Form.month;
					delete $scope.Form.day;
					delete $scope.Form.passwordrpt;
					$scope.Form.birthday = birth;
					$scope.Form.contacts = [];
					var baseContact = {};
					baseContact["Mail"] = $scope.Form.email;
					$scope.Form.contacts.push(baseContact);
					$scope.Form.created = Date(Date.UTC);
			}
	
		}
	});
})();