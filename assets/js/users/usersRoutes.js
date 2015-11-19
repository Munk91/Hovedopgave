var usersRoutes = angular.module('users.routes', ['users']);

usersRoutes.config(function($stateProvider) {
    $stateProvider
        .state('statistic.users', {
            url: "users",
            views: {
                'main': {
                    templateUrl: "views/users/users.html",
                    controller: 'UsersController as UsersCtrl' 
                }
            
            }
        })
        .state('statistic.users.create', {
            url: "/create",
            templateUrl: "views/users/usersCreate.html",
        })
        .state('statistic.users.list', {
            url: "/list",
            templateUrl: "views/users/usersList.html",
        });
});
