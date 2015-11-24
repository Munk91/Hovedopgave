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
                url: "/show",
                templateUrl: "views/statistics/statisticsShow.html"
            })
            .state('statistic.statistics.show.graph', {
                url: "/:statsId",
                templateUrl: "views/statistics/showStatisticsGraph.html"
            });
    });
