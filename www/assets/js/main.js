angular.module('routerModule', ['statistics.users', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('users', {
                url: "/",
                templateUrl: "users/users.html",
                controller: 'UsersController as UsersCtrl' 
            })
    });


// Lol
angular.module('statistic.users)
    .controller('UsersController', ['$scope', function($scope) {
        $scope.test = "fest";
    }]);
    
