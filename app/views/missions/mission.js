'use strict';

angular.module('myApp.mission', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/missions', {
    templateUrl: 'app/views/missions/mission.html',
    controller: 'OssCtrl'
  });
}])

.controller('OssCtrl', ['$scope', function($scope) {  
  
}])

.directive('highlight', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      console.log(element);
      hljs.highlightBlock(element[0]);
    }
  }
});
