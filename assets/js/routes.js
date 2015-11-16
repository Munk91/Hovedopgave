var routes = angular.module('routes', ['ui.router', 'users.routes']);

routes.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
});
