var Stock = angular.module('Stock', ['ngRoute', 'chart.js']);

Stock.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/home.html',
            controller: 'mainController'
        });
});