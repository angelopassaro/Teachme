angular.module('app')
.controller('SignInCtrl', ['$scope', 'Student', '$state', function($scope, Student){
        $scope.log = function(){
            var TIME = 60*60;
            var email = {
                email :$scope.formLogin.user,
                password :$scope.formLogin.password,
                ttl :TIME
            };

            var username = {
                username :$scope.formLogin.user,
                password :$scope.formLogin.password,
                ttl :TIME
            };

            Student.login(email,
                function(user) {
                    console.log(user);
                }, function(err){
                    console.log("non email prova username");
                    Student.login(username ,
                        function (user, err){
                            console.log(user);
                            console.log(err);
                        })
                    })
                };
            }]);
