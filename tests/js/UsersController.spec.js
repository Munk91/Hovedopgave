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
            $httpBackend.expectGET('/api/showAllUsers').respond(200);
            $httpBackend.flush();
        });

        it('should delete a user', function() {
            var users = $httpBackend.whenGET('/api/showAllUsers')
                            .respond([user = { deleted_at : null }]);

            $httpBackend.expectDELETE(user, '/api/delete')
                            .respond(user = { deleted_at : "2001-12-30 13:37:00" })

            expect(user.deleted_at).not.toBe(null);
        });
    });
});
