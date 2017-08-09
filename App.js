    var osloApp = angular.module('osloApp', ['ngRoute','ng-breadcrumbs']);

    osloApp.controller('mainController',['$scope',
          'breadcrumbs', function($scope,breadcrumbs) {
            $scope.breadcrumbs = breadcrumbs;
    }]);

    osloApp.config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);
