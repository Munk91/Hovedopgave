angular.module('statistics', ['statistic.service'])
    .controller('StatisticsController', function(showStatistics, $stateParams, $state) {
        ctrl = this;

        ctrl.activeStatisticIndex = 'Vælg statistik index';
        ctrl.activeStatisticType = 'Vælg statistik type';
        ctrl.activeStatisticTypeList = [];

        ctrl.statistics = [
            {
                'index' : 'MCstats',
                'type' : ['Brugere', 'Test']
            },
            {
                'index' : 'Andet',
                'type' : ['Fest']
            }
        ];

        ctrl.showStatistics = function(statisticIndex, statisticType) {
            $stateParams.statsIndexId = statisticIndex;
            $stateParams.statsTypeId = statisticType;

            showStatistics.query({statsIndexId : $stateParams.statsIndexId, statsTypeId : $stateParams.statsTypeId }).$promise.then(function(data) {
                ctrl.statistics = data;
            });
        };

        ctrl.getStatsTypes = function(selectedStatistic) {
            ctrl.activeStatisticIndex = selectedStatistic.index;

            // If index dropdown value changes, reset type dropdown and URL
            ctrl.activeStatisticTypeList = [];
            $state.go('.', {'statsIndexId' : selectedStatistic.index, 'statsTypeId' : null});
            ctrl.activeStatisticType = 'Vælg statistik type';

            angular.forEach(selectedStatistic.type, function(type) {
                ctrl.activeStatisticTypeList.push(type);
            });
        }
    });
