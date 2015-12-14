angular.module('statistic.pull', ['statistic.pull.service'])
    .controller('PullController', function($timeout, elasticIndex, testRemoteApi, saveRemoteApi) {
        var ctrl = this;
        ctrl.error = '';
        ctrl.pullData = function(index, type, api) {
            var apiData = null;
            testRemoteApi.get({ apiUrl : api }).$promise.then(function(data) {
                apiData = data;

                if (data.error) {
                    ctrl.error = data.error;
                    $timeout(function() {
                        ctrl.error = '';
                    }, 3000);
                } else {
                    var apiES = {
                        'index': index,
                        'type': type,
                        'body': { type: apiData }
                    };

                    // Index the api data in ElasticSearch
                    elasticIndex.save(apiES).$promise.then(function() {
                        var apiRemote = {
                            'index' : index,
                            'type' : type,
                            'url' : api
                        };

                        // Save the api data in sql db
                        saveRemoteApi.save(apiRemote).$promise.then(function() {
                            ctrl.success = api + ' blev gemt';
                            $timeout(function() {
                                ctrl.success = '';
                            }, 3000);
                        }, function(error) {
                            ctrl.error = 'Kunne ikke gemme api url i databasen. Prøv igen, eller kontakt admin.';
                            $timeout(function() {
                                ctrl.error = '';
                            }, 3000);
                        });
                    }, function(error) {
                        ctrl.error = 'Kunne ikke indexere data. Tjek om de indtastede data er korrekte og prøv igen.';
                        $timeout(function() {
                            ctrl.error = '';
                        }, 3000);
                    });
                }
            }, function(error) {
                    ctrl.error = 'Der gik noget galt. Tjek om de indtastede data er korrekt og prøv igen.';
                    $timeout(function() {
                        ctrl.error = '';
                    }, 3000);
            });
        }

        ctrl;
    });
