angular.module('app')
      .controller('SignUpCtrl', ['$scope', 'Student','$state',function($scope, Student, $state){
     $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
     $scope.years = range(1970, 2016);
     $scope.days = range(1, 31);
     $scope.nickValidator = "\\w*\\d*";
     $scope.nameValidator = "\\w*";
     $scope.lastnameValidator = "\\w*";
     $scope.emailValidator = "\\w*.\\w+\\d@\\w*.unisa.it";/*Fix it*/
     $scope.passwordValidator = "\\w*";
     /*Javascript new Date(anno, mese, giorno)*/
     $scope.createDays = function(){
       switch($scope.formInfo.month){
         case 'February':
            $scope.days = ($scope.formInfo.year % 4 === 0) ? range(1, 29) : range(1, 28);
            break;
         case 'November': case 'April': case 'June': case 'September':
            $scope.days = range(1, 30);
            break;
         default:
            $scope.days = range(1, 31);
       }
     };

      $scope.registration = function(){
         birth = new Date(Date.UTC($scope.formInfo.year,$scope.months.indexOf($scope.formInfo.month),$scope.formInfo.day));
         delete $scope.formInfo.year;
         delete $scope.formInfo.month;
         delete $scope.formInfo.day;
         delete $scope.formInfo.passwordrpt;
         $scope.formInfo.birthday = birth;
         $scope.formInfo.contact = [];
         Student.create($scope.formInfo)
            .$promise
            .then(function(){
               
            });
            $state.go('signup-success');
      };

    }]);

  function range(start, finish){
    var tmp = new Array(finish - start);
    for(var i=start; i<=finish; i++){
        tmp[i-start] = i;
    }
    return tmp;
  }
