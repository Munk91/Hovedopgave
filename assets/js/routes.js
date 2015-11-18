angular.module('routes', ['ui.router', 'statistic.home'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $stateProvider
            views: {
                'navbar': {
                    templateUrl: "views/navbar.html"
                },
                'front': {
                    templateUrl: "views/home/home.html",
                    controller: "HomeController as HomeCtrl"
                }
            }
    });
