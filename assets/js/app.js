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
