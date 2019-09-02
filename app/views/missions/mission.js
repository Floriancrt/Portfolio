'use strict';

angular.module('myApp.mission', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/missions', 
        {
            templateUrl: 'app/views/missions/mission.html',
        })
        .when('/missions/EDF',
        {
            templateUrl: 'app/views/missions/EDF/stage-EDF.html'
        })
        .when('/mission/Altsysnet',
        {
            templateUrl: 'app/views/missions/Altsysnet/stage-Altsysnet.html'
        });
    }])




   