describe('pull.service', function() {
    beforeEach(angular.mock.module('pull.service'));

    describe('indexData', function() {
        it('can get and instance of indexData factory', inject(function(indexData) {
           expect(indexData).toBeDefined(); 
        }));
    })
})
