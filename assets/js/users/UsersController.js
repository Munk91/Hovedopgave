angular.module('users', ['user.service'])
    .controller('UsersController', function(showAllUsers, deleteUser) {
        ctrl = this;

        init = function() {
            getUsers();
        };

        ctrl.deleteUser = function(user) {
            console.log(user);
            if(user) {
                console.log(deleteUser.delete(user));   
                getUsers();
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
