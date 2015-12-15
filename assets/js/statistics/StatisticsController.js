angular.module('statistics', ['statistic.service', 'googlechart'])
    .controller('StatisticsController', function(showStatistics, apiData, $stateParams, $state) {
        ctrl = this;
        ctrl.statistics = [];
        ctrl.chartData = [];
        ctrl.chartTitle = '';
        ctrl.activeChartType = 'Vælg diagram type';
        ctrl.chartTypes = [
            'PieChart',
            'BarChart',
            'ColumnChart',
            'AreaChart',
            'Gauge'
        ];

        statsIndexId = $stateParams.statsIndexId || null;
        statsTypeId = $stateParams.statsTypeId || null;

        init = function() {
            $state.go('.', {'statsIndexId' : null, 'statsTypeId' : null});
            setActiveDropdownValue();
            getApiData();
        };

        filterData = function(list) {
            ctrl.filteredList = _.map(list[0], function(value, key) {
                return key;
            });
            ctrl.filteredValue = _.map(list, function(value, key) {
                return value;
            })
        };

        ctrl.drawChart = function(chartType, data, title) {
            chartObject = {};
            chartObject.type = chartType;
            chartObject.data = formatChartData(data);
            chartObject.options = {
                displayExactValues: true,
                width: 600,
                height: 600,
                is3D: true,
                title: title
            };
            ctrl.chart = chartObject;
        };

        formatChartData = function(data) {
            chartObjectData = [
                ['ChartData', 'data']
            ];

            for(i = 0; i < ctrl.chartData.length; i++) {
                currentDataObject = ctrl.chartData[i];
                dataHeader = currentDataObject.index + ', ' + currentDataObject.type;

                if(currentDataObject.checked) {
                    chartObjectData.push([
                            dataHeader,
                            currentDataObject.data[1]
                    ]);
                }
            }
            return chartObjectData;
        };

        ctrl.getStatisticsData = function(statisticIndex, statisticType) {
            statsIndexId = statisticIndex;
            statsTypeId = statisticType;

            showStatistics.get({
                statsIndex : statsIndexId,
                statsType : statsTypeId
                })
                .$promise.then(function(data) {
                    ctrl.fetchedData = data.hits.hits[0];
                    filterData(ctrl.fetchedData._source.type);

                    var dataObject = {
                        'index' : ctrl.fetchedData._index,
                        'type' : ctrl.fetchedData._type,
                        'data' : ctrl.filteredValue,
                        'checked' : false
                    };

                    var duplicate = false;

                    for(i = 0; i < ctrl.chartData.length; i++) {
                        // check for duplicates in chartData list
                        if(dataObject.type == ctrl.chartData[i].type) {
                            duplicate = true;
                        }
                    }

                    if(!duplicate) {
                        ctrl.chartData.push(dataObject);
                    }

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

            angular.forEach(selectedStatistic.types, function(type) {
                ctrl.activeStatisticTypeList.push(type);
            });
        };

        getApiData = function() {
            var fetchedApis = [];
            apiData.query().$promise.then(function(data) {
                if(data.length) {
                    for(var api in data) {
                        var currentApi = data[api];
                        if(currentApi.index && currentApi.type && currentApi.url) {
                            var apiObj = {
                                'index' : currentApi.index,
                                'types' : [currentApi.type],
                                'url' : currentApi.url
                            };

                            fetchedApis.push(apiObj);
                        }
                    }
                };
            }).finally(function() {
                // Join types with same index
                    for(i = 0; i < fetchedApis.length; i++) {
                        var currentApi = fetchedApis[i];
                        if(ctrl.statistics.length > 0) {
                            for(j = 0; j < ctrl.statistics.length; j++) {
                                var currentStat = ctrl.statistics[j];
                                if(fetchedApis[i].index == ctrl.statistics[j].index) {
                                    ctrl.statistics[j].types.push(fetchedApis[i].types[0]);
                                } else {
                                    ctrl.statistics.push(fetchedApis[i]);
                                }
                            }
                        } else {
                            ctrl.statistics.push(currentApi);
                        }
                    }
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
