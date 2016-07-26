angular.module('app', ['ui.router', 'lbServices'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider,
                            $urlRouterProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
                })
            .state('signup', {
                url: '/signup',
                templateUrl: 'views/signup.html',
                controller: 'SignUpCtrl'
                })
            .state('signin', {
                url: '/signin',
                templateUrl: 'views/signin.html',
                controller: 'SignInCtrl'
                })
            .state('signup-success', {
                url: '/signup/verifyemail',
                templateUrl: 'views/verify.html'
                })
            .state('signin-success', {
               url: '/signin/platform',
               templateUrl: 'views/platform.html',
               controller: 'PlatformCtrl'
            })
            .state('signin-success.platform-home', {
               url: '/home',
               templateUrl: 'views/userhome.html',
               controller: 'PlatformCtrl'
            })
            .state('signin-success.edituser', {
               url: '/edit-user',
               templateUrl: 'views/edituser.html',
               controller: 'PlatformCtrl'
            });
           $urlRouterProvider.otherwise('/');
        }])
    .run(['$rootScope', '$state', '$stateParams',function($rootScope, $state, $stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);