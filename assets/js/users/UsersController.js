angular.module('users', ['user.service', 'pull.service'])
    .controller('UsersController', function(showAllUsers, indexData, deleteUser, $timeout) {
        ctrl = this;
        ctrl.error = "";

        init = function() {
            getUsers();
        };

        ctrl.deleteUser = function(user) {
            if(user) {
                if(confirm('Er du sikker på at du vil slette ' + user.name + '?')) {
                    deleteUser.delete(user).$promise.then(function(resource) {
                        if(resource.message) {
                            ctrl.error = resource.message;
                            $timeout(function() {
                                ctrl.error = '';
                            }, 3000);
                        } else {
                            ctrl.success = user.name + ' blev slettet';
                            $timeout(function() {
                                ctrl.success = '';
                            }, 3000);
                        }

                        getUsers();
                    });
                }
            }
        };

        getUsers = function() {
            showAllUsers.query().$promise.then(function(data) {
                ctrl.users = data;
            })
            .finally(function() {
                indexData.index(ctrl.users);
            });
        };

        init();
        
        return ctrl;
    });
