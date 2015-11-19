angular.module('routes', ['ui.router', 'statistic.home'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        // Get rid of /#/ in front of URLs
        $locationProvider.html5Mode(true);

        /*
         * If the path doesn't match any url
         * route to default url
         */
        $urlRouterProvider.otherwise('/');
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
