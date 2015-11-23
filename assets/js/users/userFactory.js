angular.module('user.service', ['ngResource'])
    .factory('showAllUsers', function($resource) {
        return $resource('/api/showAllUsers');
    })
    .factory('deleteUser', function($resource) {
        return $resource('/api/deleteUser');
    });
