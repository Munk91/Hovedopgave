angular.module('statistics.routes', ['statistics'])
    .config(function($stateProvider) {
        $stateProvider
            .state('statistic.statistics', {
                url: "statistics",
                views: {
                    'main': {
                        templateUrl: "views/statistics/statistics.html",
                        controller: 'StatisticsController as StatisticsCtrl'
                    }
                }
            })
            .state('statistic.statistics.show', {
                url: "/show/:statsIndexId/:statsTypeId",
                templateUrl: "views/statistics/statisticsShow.html",
                params: {
                    statsIndexId: {
                        value: null,
                        squash: true
                    },
                    statsTypeId: null 
                }
            });
    });
