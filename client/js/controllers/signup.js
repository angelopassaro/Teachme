define(['app', 'services/date-services'], function (app) {
  'use-strict';
  app.controller('signupCtrl', ['$scope', '$controller', 'PATTERNS', 'Student', '$state', 'dateService',
    function ($scope, $controller, PATTERNS, Student, $state, dateService, cssInjector) {
      /*Constants and Validators*/
			var parentController = $controller('BaseController', {$scope: $scope});
      $scope.months = dateService.createMonths();
      $scope.years = dateService.range(1970, 2016);
      $scope.days = dateService.range(1, 31);
      $scope.nickValidator = PATTERNS.USERNAME_PATTERN;
      $scope.nameValidator = PATTERNS.TEXT_PATTERN
      $scope.lastnameValidator = PATTERNS.TEXT_PATTERN
      $scope.emailValidator = PATTERNS.EMAIL_VALIDATOR;
      $scope.passwordValidator = PATTERNS.PASSWD_PATTERN;
			$scope.createDays = dateService.manageDays;
      /*Functions*/
      $scope.createDays = function () {
				switch ($scope.Form.month) {
					case 'February':
						$scope.days = ($scope.Form.year % 4 === 0) ? dateService.range(1, 29) : dateService.range(1, 28);
						break;
					case 'November': case 'April': case 'June': case 'September':
						$scope.days = dateService.range(1, 30);
						break;
					default:
						$scope.days = dateService.range(1, 31);
				}
			};

			$scope.registration = function () {
				if(!$scope.Form.$valid){
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
			     /*	Student.create($scope.Form).$promise.then(function (success) {
					parentController.loadView('signup-success');
				}, parentController.handleError);*/
			};
		}]);
});
