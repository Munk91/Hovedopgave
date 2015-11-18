angular.module('users', ['user.service'])
    .controller('UsersController', function(showAllUsers) {
        ctrl = this;

        init = function() {
            showAllUsers.query().$promise.then(function(data) {
                ctrl.users = data;
            });
        };
        
        init();
        return ctrl;
    });
