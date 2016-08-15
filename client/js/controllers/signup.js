define(['app', 'services/date-services'], function(app){
  'use-strict';
  app.controller('SignupCtrl', ['$scope', 'Student','$state','dateService',
    function($scope, Student, $state, dateService, cssInjector){
      /*Constants and Validators*/
      $scope.months = dateService.createMonths();
      $scope.years = dateService.range(1970, 2016);
      $scope.days = dateService.range(1, 31);
      $scope.nickValidator = app.TEXT_PATTERN;
      $scope.nameValidator = app.TEXT_PATTERN
      $scope.lastnameValidator = app.TEXT_PATTERN
      $scope.emailValidator = app.EMAIL_VALIDATOR;
      $scope.passwordValidator = app.PASSWD_PATTERN;
      /*Functions*/
      $scope.createDays = function(){
			 switch($scope.Form.month){
				 case 'February':
						$scope.days = ($scope.Form.year % 4 === 0) ? tutorService.range(1, 29) : tutorService.range(1, 28);
						break;
				 case 'November': case 'April': case 'June': case 'September':
						$scope.days = dateService.range(1, 30);
						break;
				 default:
						$scope.days = dateService.range(1, 31);
			 }
		 };

			$scope.registration = function(){
				birth = new Date(Date.UTC($scope.Form.year,$scope.months.indexOf($scope.Form.month),$scope.Form.day));
				delete $scope.Form.year;
				delete $scope.Form.month;
				delete $scope.Form.day;
				delete $scope.Form.passwordrpt;
				$scope.Form.birthday = birth;
				$scope.Form.contact = [];
        $scope.Form.created = Date(Date.UTC);
				Student.create($scope.Form)
					.$promise
						.then(function(){
              $state.go('platform');
						},function(error){
            console.log(error);
        });
			};
}]);
});
