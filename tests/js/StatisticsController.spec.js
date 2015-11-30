describe('StatisticsController', function() {
    var $httpBackend;
    var $stateParams;
    var $state;
    var showStatistics;
    var ctrl;


    beforeEach(function() { 
        module('statisticsApp');
        
        inject(function(
            $controller,
            _$httpBackend_,
            _showStatistics_,
            _$stateParams_,
            _$state_
        ) {
            $httpBackend = _$httpBackend_;
            showStatistics = _showStatistics_;
            $stateParams = _$stateParams_;
            $state = _$state_;

            spyOn($state, 'go').and.returnValue({});

            ctrl = $controller('StatisticsController', {
                showStatistics : showStatistics,
                $stateParams : $stateParams,
                $state : $state
            });
        });
    });

    it('should go to current state on init of the controller', function() {
        expect(ctrl).not.toBe(null);
        expect($state.go).toHaveBeenCalledWith($state.current, {'statsIndexId' : null, 'statsTypeId' : null});
    });

    it('should fetch statistics from query request based on index and type', function() {
        ctrl.showStatistics('index', 'type');

        $httpBackend.whenGET('views/navbar.html').respond(200);
        $httpBackend.whenGET('views/home/home.html').respond(200);
        $httpBackend.expectGET('/api/elasticGet/index/type').respond(200);
        $httpBackend.flush();
    });

    it('should get the types based on the selected statistic index', function() {
        spyOn(ctrl, 'getStatsTypes').and.callThrough();

        statistic = { type : ['someType'] }

        ctrl.getStatsTypes(statistic);

        expect(ctrl.getStatsTypes).toHaveBeenCalledWith(statistic);
        expect(setActiveDropdownValue).toHaveBeenCalled;
        expect(ctrl.activeStatisticTypeList[0]).toBe('someType');
    });
});
