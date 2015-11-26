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

        init = function() {
            $state.go($state.current, {'statsIndexId' : null, 'statsTypeId' : null});
        };

        ctrl.showStatistics = function(statisticIndex, statisticType) {
            $stateParams.statsIndexId = statisticIndex;
            $stateParams.statsTypeId = statisticType;

            showStatistics.query({statsIndexId : $stateParams.statsIndexId, statsTypeId : $stateParams.statsTypeId }).$promise.then(function(data) {
                ctrl.statistics = data;
            });
        };

        ctrl.getStatsTypes = function(selectedStatistic) {

            // If index dropdown value changes, reset type dropdown and URL
            ctrl.activeStatisticTypeList = [];
            $state.go('.', {'statsIndexId' : selectedStatistic.index, 'statsTypeId' : null});

            $stateParams.statsIndexId = selectedStatistic.index;
            setActiveDropdownValue();

            angular.forEach(selectedStatistic.type, function(type) {
                ctrl.activeStatisticTypeList.push(type);
            });
        };

        setActiveDropdownValue = function() {
            if($stateParams.statsIndexId) {
                ctrl.activeStatisticIndex = $stateParams.statsIndexId;
                if($stateParams.statsTypeId) {
                    ctrl.activeStatisticType = $stateParams.statsTypeId;
                } else {
                    ctrl.activeStatisticType = 'Vælg statistik type';
                }
            }
        };

        init();
    });
