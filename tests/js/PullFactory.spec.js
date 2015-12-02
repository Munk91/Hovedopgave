describe('pull.service', function() {
    beforeEach(angular.mock.module('statistic.pull.service'));

    describe('elasticIndex', function() {
        it('can get and instance of indexData factory', inject(function(elasticIndex) {
           expect(elasticIndex).toBeDefined(); 
        }));
    })
})
