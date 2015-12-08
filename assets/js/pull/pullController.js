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
                    ctrl.success = api + ' blev gemt';
                    $timeout(function() {
                        ctrl.success = '';
                    }, 3000);
                }

                var apiES = {
                    'index': index,
                    'type': type,
                    'body': { type: apiData }
                };

                var apiRemote = {
                    'index' : index,
                    'type' : type,
                    'url' : api
                }; 

                // Index the api data in ElasticSearch
                elasticIndex.save(apiES);
                // Save the api data in sql db
                //saveRemoteApi.save(apiRemote);
            }, function(error) {
                    ctrl.error = 'Der gik noget galt. Tjek om de indtastede data er korrekt og prøv igen.';
                    $timeout(function() {
                        ctrl.error = '';
                    }, 3000);
            });
        }

        ctrl;
    });
