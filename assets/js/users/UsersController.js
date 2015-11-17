var users = angular.module('users', [
    'user.service'
]);

users.controller('UsersController', function(showAllUsers) {
    console.log(showAllUsers.query());
});
