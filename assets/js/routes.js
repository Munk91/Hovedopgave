angular.module('routerModule', ['StatisticsApp', 'users'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('users', {
                url: "/users",
                templateUrl: "users/users.html",
                controller: 'UsersController as UsersCtrl' 
            })
    });

