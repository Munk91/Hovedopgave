describe('statistic.pull', function() {
    beforeEach(angular.mock.module('statistic.pull'));
    describe('PullController', function() {
        var $controller = null;
        var $httpBackend = null;

        beforeEach(angular.mock.inject(function(_$controller_, _$httpBackend_) {
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
        }));

        it("it should call api when function is called", function() {
            var ctrl = $controller('PullController', {});

            spyOn(ctrl, 'pullData');
            ctrl.pullData('api/test', 'index', 'type');
            
            expect(ctrl.pullData).toHaveBeenCalledWith('api/test', 'index', 'type');
        })
    });
});
