angular.module('statistic.pull.service', ['ngResource'])
    .factory('elasticIndex', function($resource) {
        return $resource('/api/elasticIndex');
    })
    .factory('testRemoteApi', function($resource) {
        return $resource('/api/testRemoteApi/:apiUrl', 
            { apiUrl : '@apiUrl' });
    })
    .factory('saveRemoteApi', function($resource) {
        return $resource('/api/saveRemoteApi');
    });
    
