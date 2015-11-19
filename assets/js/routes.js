angular.module('routes', ['ui.router', 'statistic.home'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('statistic', {
                url: "/",
                views: {
                    'navbar': {
                        templateUrl: "views/navbar.html"
                    }
                },
                abstract: true
            })
            .state('statistic.front', {
                url: '',
                views: {
                    'main': {
                        templateUrl: "views/home/home.html",
                        controller: "HomeController as HomeCtrl"
                    }
                }
            });
    });
