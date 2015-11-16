var app = angular.module('statisticsApp', ['statistic.users', 'ui.router']);

app.controller('RootCtrl', ['$scope', function($scope){
    $scope.test = "fest";
}]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('stats', {
            url: "/",
            templateUrl: "views/users/users.html",
            controller: 'UsersController as UsersCtrl' 
        })
});

var app = angular.module('stats', ['ui.router', 'statistics.users'])

app.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise("/");

$stateProvider
    .state('users', {
        url: "/users",
        templateUrl: "users/users.html",
        controller: 'UsersController as UsersCtrl' 
    })
    .state('users.show', {
        url: "/show",
        templateUrl: "users/ShowUsers.html"
    })
});


var statsapp = angular.module('statistic.users', []);

statsapp.controller('UsersController', ['$scope', function($scope) {
    $scope.test = "Hola!";
}]);
