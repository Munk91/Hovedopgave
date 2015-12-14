angular.module('statistic.service', ['ngResource'])
    .factory('showStatistics', function($resource) {
        return $resource('/api/elasticGet/:statsIndex/:statsType', { statsIndex : '@statsIndex', statsType : '@statsType' });
    })
    .factory('apiData', function($resource) {
        return $resource('/api/apiList');    
    });
