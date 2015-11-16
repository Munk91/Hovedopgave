var routes = angular.module('routes', ['ui.router', 'usersRoutes']);

routes.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
});
