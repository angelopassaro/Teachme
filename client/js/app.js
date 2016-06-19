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
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html'
                });
           /* $urlRouterProvider.otherwise('/');*/
        }])
    .run(['$rootScope', '$state', '$stateParams',function($rootScope, $state, $stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);