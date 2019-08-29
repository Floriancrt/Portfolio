'use strict';

angular.module('myApp.project', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projets', {
            templateUrl: 'app/views/projets/projet.html'
        });
    }])