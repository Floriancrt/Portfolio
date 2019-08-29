'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap.collapse',
    'ui.bootstrap.tpls',
    'ui.bootstrap.alert',
    'myApp.home',
    'myApp.about',
    'myApp.mission',
    'myApp.project',
    'myApp.report',
    'LocalStorageModule'
]).

config(['$locationProvider', '$routeProvider', 'localStorageServiceProvider',
    function($locationProvider, $routeProvider, localStorageServiceProvider) {

        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({
            redirectTo: '/about'
        });

        localStorageServiceProvider
            .setPrefix('juanmirodPortfolio');
    }
]).

controller('AppController', ['$scope', '$location', 'localStorageService',
    function($scope, $location, localStorageService) {

        $scope.isCollapsed = true;
        $scope.showCookieAlert = true;
        $scope.$location = $location;

        $scope.disableCookies = function() {
            localStorageService.clearAll();
            $scope.showCookieAlert = false;
        }


    }
]);