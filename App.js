    var osloApp = angular.module('osloApp', ['ngRoute','ng-breadcrumbs']);

    osloApp.controller('mainController',['$scope',
          'breadcrumbs', function($scope,breadcrumbs) {
            $scope.breadcrumbs = breadcrumbs;
    }]);

    osloApp.controller('editUserController', function($scope){
      $('.selectpicker').selectpicker('render');
    });
