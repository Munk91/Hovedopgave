var users = angular.module('users', [
    'user.service'
]);

users.controller('UsersController', function(showAllUsers) {
    ctrl = this;

    init = function() {
        showAllUsers.query().$promise.then(function(data) {
            ctrl.users = data;
        });
    };
    
    init();
    return ctrl;
});
