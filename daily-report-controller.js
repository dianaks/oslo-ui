angular.module('osloApp').controller('dailyReportController',['$rootScope','$scope','$http',
function  ($rootScope,$scope,$http) {
  $scope.showStatus = false;
  $scope.showReport = function(){
    var request = {
      method: "GET",
      url: "http://localhost:8080/api/reports?date=20170424",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Basic " + btoa($rootScope.credentials.username+":"+$rootScope.credentials.password)
      }
    }
    $http(request).then(function(response) {
      $scope.report = response.data.data;
      $scope.showStatus = response.data.success;
    });
}}]);
