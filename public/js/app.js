var Stock = angular.module('Stock', ['ngRoute', 'chart.js', 'angular-loading-bar']);

Stock.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/home.html',
            controller: 'mainController'
        });
});