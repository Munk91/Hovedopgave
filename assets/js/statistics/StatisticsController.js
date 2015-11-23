angular.module('statistics', [])
    .controller('StatisticsController', function() {
        ctrl = this;

        ctrl.statisticIndexes = [
            "Brugere",
            "Andet"
        ];

        ctrl.activeStatisticIndex = "Vælg statistik"; 

        ctrl.getStatistics = function(statisticIndex) {
            ctrl.activeStatisticIndex = statisticIndex;

            switch(statisticIndex) {
                case "Brugere":
                    getUsers();
                    break;
                case "Andet":
                    getOther();
                    break;
                default:
                    break;
            }
        };

        getUsers = function() {
            console.log("Get users!!"); 
        };

        getOther = function() {
            console.log("Get other!!"); 
        }; 
    });
