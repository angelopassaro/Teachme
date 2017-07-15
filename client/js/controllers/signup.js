(function () {
	define(['app', 'services/date-services'], function (app) {
		'use-strict';
		app.controller('signupCtrl', signupCtrl);
		signupCtrl.$inject = ['$scope', 'PATTERNS', 'Student', '$state', '$date'];

		function signupCtrl($scope, PATTERNS, Student, $state, $date) {
			var signup = this;
			signup.months = $date.createMonths();
			signup.years = $date.range(1970, 2016);
			signup.days = $date.range(1, 31);
			signup.createDays = function () {
				signup.days = $date.checkDays(signup.month, signup.year);
			}

			signup.registration = function () {
				var birth = new Date(Date.UTC(signup.year,
					signup.months.indexOf(signup.month), signup.day));
				var request = {};
				request['username'] = signup.username;
				request['name'] = signup.name;
				request['lastName'] = signup.lastName;
				request['birthday'] = birth;
				request['contacts'] = [];
				request['isTutor'] = signup.isTutor;
				request['password'] = signup.password;
				var baseContact = {};
				baseContact['Mail'] = signup.email;
				request['contacts'].push(baseContact);
				request['created'] = Date(Date.UTC);
				
			}

		}
	});
})();