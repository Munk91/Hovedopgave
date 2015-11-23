var statisticsRoutes = angular.module('statistic.show.routes', ['statistics']);

statisticsRoutes.config(function($stateProvider) {
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
        });
});
