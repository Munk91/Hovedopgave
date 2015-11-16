var usersRoutes = angular.module('users.routes', ['users']);

usersRoutes.config(function($stateProvider) {
    $stateProvider
        .state('users', {
            url: "/users",
            templateUrl: "views/users/users.html",
            controller: 'UsersController as UsersCtrl' 
        })
        .state('users.create', {
            url: "/create",
            templateUrl: "views/users/usersCreate.html",
        })
        .state('users.list', {
            url: "/list",
            templateUrl: "views/users/usersList.html",
        });
});