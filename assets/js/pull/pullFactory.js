angular.module('statistic.pull.service', ['ngResource'])
    .factory('elasticIndex', function($resource) {
        return $resource('/api/elasticIndex');
    })
    .factory('getApi', function($resource) {
        return {
            query: function(api) {
                return $resource(api, {
                    query: { 
                        method: 'GET',
                        isArray: false
                    }
                }).query();
            }
        }
    });
