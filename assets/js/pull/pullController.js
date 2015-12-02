angular.module('statistic.pull', ['statistic.pull.service'])
    .controller('PullController', function(elasticIndex, getApi) {
        var ctrl = this;
        ctrl.pullData = function(api, index, type) {
            var apiData = null;
            getApi.query(api).$promise.then(function(data) {
                apiData = data;
            }).finally(function() {
                var params = {
                    'index': index,
                    'type': type,
                    'body': {type: apiData}
                };
                elasticIndex.save(params);
            });
        };
        ctrl;
    });
