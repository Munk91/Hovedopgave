var app = angular.module('stats', ['ui.router', 'statistics.users'])

app.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise("/");

$stateProvider
    .state('users', {
        url: "/users",
        templateUrl: "users/users.html",
        controller: 'UsersController as UsersCtrl' 
    })
});

