var usersRoutes = angular.module('usersRoutes', ['statistic.users']);

usersRoutes.config(function($stateProvider) {
    $stateProvider
        .state('users', {
            url: "/users",
            templateUrl: "views/users/users.html",
            controller: 'UsersController as UsersCtrl' 
        })
        .state('users.create', {
            url: "/create",
            templateUrl: "views/users/users-create.html",
            controller: 'UsersController as UsersCtrl'
        })
        .state('users.list', {
            url: "/list",
            templateUrl: "views/users/users-list.html",
            controller: 'UsersController as UsersCtrl'
        });
});
