angular.module('statistic.service', ['ngResource'])
    .factory('showStatistics', function($resource) {
        return $resource('/api/elasticGet/:statsIndexId/:statsTypeId', { statsIndexId : '@statsIndexId', statsTypeId : '@statsTypeId' });
    });
