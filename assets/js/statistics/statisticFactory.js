angular.module('statistic.service', ['ngResource'])
    .factory('showStatistics', function($resource) {
        return $resource('/api/showStatistics/:statsIndexId/:statsTypeId', { statsIndexId : '@statsIndexId', statsTypeId : '@statsTypeId' });
    });
