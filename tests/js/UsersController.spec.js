describe('users', function() {
    beforeEach(angular.mock.module('users'));

    describe('UsersController', function() {
        var $controller = null;
        var $httpBackend = null;

        beforeEach(angular.mock.inject(function(_$controller_, _$httpBackend_) { 
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
        }));

        it('should fetch users on init of the controller', function() {
            $controller('UsersController', {});
            $httpBackend.whenGET('/api/users').respond(200);
            $httpBackend.flush();
        });
    });
});
