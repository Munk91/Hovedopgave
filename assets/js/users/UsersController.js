angular.module('users', ['user.service'])
    .controller('UsersController', function(showAllUsers, deleteUser) {
        ctrl = this;

        ctrl.error = "";

        init = function() {
            getUsers();
        };

        ctrl.deleteUser = function(user) {
            if(user) {
                deleteUser.delete(user).$promise.then(function(resource) {
                    getUsers();

                    ctrl.error = resource.message;
                });
            }
        };

        getUsers = function() {
            showAllUsers.query().$promise.then(function(data) {
                ctrl.users = data;
            });
        };

        init();
        
        return ctrl;
    });
