angular.module('statistic.service', ['ngResource'])
    .factory('showStatistics', function($resource) {
        return $resource('/api/showStatistics/:statsId', { statsId : '@statsId' });
    });
