'use strict';

angular.module('myApp.about', [
  'ngRoute', 
  'ui.bootstrap.tabs', 
  'ui.bootstrap.popover', 
  'ui.bootstrap.modal'
  ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/parcours', {
    templateUrl: 'app/views/parcours/parcours.html',
    controller: 'CvCtrl'
  });
}])

.controller('CvCtrl', ['$scope', '$sce', '$uibModal', '$window', 
  function($scope, $sce, $uibModal, $window) {
  
  function addTpl(internship, index) {
    
    internship.tpl = "internshipPopoverTemplate.html";
    
    internship.placement = 'right';
    if ( index%2 == 0 ) {
      internship.placement = 'left';
    }
    
    return internship;
  }

  // enable animations on modals
  $scope.animationsEnabled = true;
  
  $scope.openModal = function (company) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'teamModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: '',
      resolve: { 
        company: function(){
          return company;
        } 
      }
    });

  };

  // Always show the popovers, this is required by ui-bootstrap popovers
  $scope.showinternships = true;

  // Bind the content
  $scope.internships = profile.internships;
  $scope.internships = $scope.internships.map(addTpl);
  $scope.courses = profile.courses
  $scope.companies = profile.companies;

  $scope.print = function(){
    $window.print();
  }

  //TODO:: show the time internships with an animation, make the timeline fit the number of internships
}])

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, company) {

  $scope.company = company;

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  
});