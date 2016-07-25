angular.module('app')
<<<<<<< HEAD
// .controller('SignInCtrl', ['$scope', 'Student', '$state', function($scope, Student){
//         $scope.log = function(){
//             var TIME = 60*60;
//             var email = {
//                 email :$scope.formLogin.user,
//                 password :$scope.formLogin.password,
//                 ttl :TIME
//             };
//
//             var username = {
//                 username :$scope.formLogin.user,
//                 password :$scope.formLogin.password,
//                 ttl :TIME
//             };
//
//             Student.login(email,
//                 function(user) {
//                     console.log(user);
//                 }, function(err){
//                     console.log("non email prova username");
//                     Student.login(username ,
//                         function (user, err){
//                             console.log(user);
//                             console.log(err);
//                         })
//                     })
//                 };
//             }]);
=======
    .controller('SignInCtrl', ['$scope', 'Student', '$state', function($scope, Student, $state){
        $scope.log = function(){
          Student.login({
            email: $scope.formLogin.user,
            password: $scope.formLogin.password,
            ttl: 60 * 60
            }).$promise.then(function success(){
            $state.go('signin-success');
            }, function err(error){
                console.log(error);
            });
        };
}]);
>>>>>>> 457bf608026102b28c6628cf0fa5e0f677bcfb0b
