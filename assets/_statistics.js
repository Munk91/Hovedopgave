angular.module("statistics", ["ui.router"]
    .controller('RootCtrl', [$controller, function($controller)
        {
            $controller("test");
            var vm = this;
            vm.test = 'Fest";
            return vm
        }])
