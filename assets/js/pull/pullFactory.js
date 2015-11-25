angular.module('pull.service', ['ngResource'])
    .factory('elasticIndex', function($resource) {
        return $resource('api/elasticIndex');
    });
