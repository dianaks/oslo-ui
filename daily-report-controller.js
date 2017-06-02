angular.module('osloApp').controller('dailyReportController',['$scope','$http',
function  ($scope,$http) {
  $scope.showStatus = false;
  $scope.showReport = function(){
    var request = {
      method: "GET",
      url: "http://localhost:8080/api/reports?date=20170424",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Basic " + btoa("admin-demo-one:123")
      }
    }
    $http(request).then(function(response) {
      $scope.report = response.data.data;
      $scope.showStatus = response.data.success;
    });
}}]);
