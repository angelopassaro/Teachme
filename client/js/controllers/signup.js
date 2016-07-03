angular.module('app')
      .controller('SignUpCtrl', ['$scope', 'Student','$state',function($scope, Student){
     $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
     $scope.years = range(1970, 2016);
     $scope.days = range(1, 31);
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
     /*Giorno indietro a causa del formato di Date. Bisogna aggiungere il time zone*/
      $scope.registration = function(){
         birth = new Date(Date.UTC($scope.formInfo.year,$scope.months.indexOf($scope.formInfo.month),$scope.formInfo.day));
         delete $scope.formInfo.year;
         delete $scope.formInfo.month;
         delete $scope.formInfo.day;
         $scope.formInfo.birthday = birth;
         $scope.formInfo.contact = [];
         console.log(birth);
         /*Student.create($scope.formInfo)
            .$promise
            .then(function(student){
               console.log(student);
            });*/
      };
      
    }]);
  
  function range(start, finish){
    var tmp = new Array(finish - start);
    for(var i=start; i<=finish; i++){
        tmp[i-start] = i;
    }
    return tmp;
  }