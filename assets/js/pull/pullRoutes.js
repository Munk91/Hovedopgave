angular.module('statistic.pull.routes', ['statistic.pull'])
    .config(function($stateProvider) {
        $stateProvider
            .state('statistic.pull', {
                url: "pull",
                views: {
                    'main': {
                        templateUrl: "views/pull/pull.html",
                        controller: "PullController as PullCtrl"
                    }
                }
            })
    });
