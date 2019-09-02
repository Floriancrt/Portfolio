'use strict';

angular.module('myApp.project', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/projets', {
            templateUrl: 'app/views/projets/projet.html'
        })
        .when('/projets/Remontees-Mecaniques',
        {
            templateUrl: 'app/views/projets/Remontees-Mecaniques/Remontees-Mecaniques.html'
        })
        .when('/projets/GSB-WEB',
        {
            templateUrl: 'app/views/projets/GSB-WEB/GSB-WEB.html'
        })
        .when('/projets/GSB-Materiel',
        {
            templateUrl: 'app/views/projets/GSB-MATERIEL/GSB-Materiel.html'
        });
    }])