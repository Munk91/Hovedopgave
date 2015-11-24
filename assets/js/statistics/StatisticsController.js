angular.module('statistics', ['statistic.service'])
    .controller('StatisticsController', function(showStatistics, $stateParams) {
        ctrl = this;

        ctrl.statisticIndexes = {
            'Brugere' : 'users',
            'Andet' : 'other'
        };

        ctrl.activeStatisticIndex = "Vælg statistik";


        ctrl.showStatistics = function(statsIndexKey, statsIndexValue) {
            $stateParams.statsId = statsIndexValue;

            ctrl.activeStatisticIndex = statsIndexKey;

            showStatistics.query({statsId : $stateParams.statsId}).$promise.then(function(data) {
                ctrl.statistics = data;
            });
        };
    });
