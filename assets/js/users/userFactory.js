angular.module('user.service', ['ngResource'])
    .factory('showAllUsers', function($resource) {
        return $resource('/api/showAllUsers'); 
    });
