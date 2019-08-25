'use strict';

angular.module('myApp.report', ['ngRoute', 'ui.bootstrap.progressbar'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/veille-technologique', {
    templateUrl: 'app/views/veille-technologique/report.html',
    controller: 'SkillsController'
  });
}])

.controller('SkillsController', ['$scope', function($scope) {
  // Get the skills values from the config file
  // Set the values, legend and colors of the progress bars
  $scope.skillset = profile.skillset;
}]);