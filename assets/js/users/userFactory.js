var app = angular.module('user.service', [
    'ngResource'
]);
app.factory('showAllUsers', function($resource) {
    return $resource('/api/users'); 
});
