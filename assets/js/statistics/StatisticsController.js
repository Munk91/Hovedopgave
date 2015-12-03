angular.module('statistics', ['statistic.service'])
    .controller('StatisticsController', function(showStatistics, $stateParams, $state) {
        ctrl = this;

        // TODO: Dynamically load this data from the database on load
        ctrl.statistics = [
            {
                'index' : 'mcstats',
                'type' : ['brugere', 'Test']
            },
            {
                'index' : 'Andet',
                'type' : ['Fest']
            }
        ];

        statsIndexId = $stateParams.statsIndexId || null;
        statsTypeId = $stateParams.statsTypeId || null;

        init = function() {
            $state.go('.', {'statsIndexId' : null, 'statsTypeId' : null});
            setActiveDropdownValue();
        };
        filterData = function(list) {
            ctrl.filteredList = _.map(list[0], function(value, key) {
                return key;
            });
            ctrl.filteredValue = _.map(list, function(value, key) {
                return value;
            })
        }

        ctrl.showStatistics = function(statisticIndex, statisticType) {
            statsIndexId = statisticIndex;
            statsTypeId = statisticType;

            showStatistics.get({
                statsIndex : statsIndexId,
                statsType : statsTypeId
                })
                .$promise.then(function(data) {
                    ctrl.fetchedData = data.hits.hits[0];
                    filterData(ctrl.fetchedData._source.type);
                    $state.go('.data');
                });
        };

        ctrl.getStatsTypes = function(selectedStatistic) {

            // If index dropdown value changes, reset type dropdown and URL
            $stateParams.statsIndexId = selectedStatistic.index;
            ctrl.activeStatisticTypeList = [];
            $state.go('.', {'statsIndexId' : selectedStatistic.index, 'statsTypeId' : null});

            statsIndexId = selectedStatistic.index;
            setActiveDropdownValue();

            angular.forEach(selectedStatistic.type, function(type) {
                ctrl.activeStatisticTypeList.push(type);
            });
        };

        setActiveDropdownValue = function() {
            if(ctrl.activeStatisticIndex) {
                ctrl.activeStatisticIndex = statsIndexId;
                ctrl.typeButtonDisabled = false;
            } else {
                ctrl.activeStatisticIndex = 'Vælg statistik index'; 
                ctrl.typeButtonDisabled = true;
            }
            if(statsTypeId) {
                ctrl.activeStatisticType = statsTypeId;
            }else {
                ctrl.activeStatisticType = 'Vælg statistik type';
                ctrl.getDataButtonDisabled = true;
            }
        };

        init();
   });
