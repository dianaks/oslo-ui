 angular.module('osloApp').controller('warehouseController',['$rootScope','$scope','$http',
 function  ($rootScope,$scope,$http) {

    $scope.selectedWarehouse = {
      data: ''
    };

    var request = {
         method: "GET",
         url: "http://localhost:8080/api/warehouses",
         headers: {
           "Content-Type": "application/json",
           "Authorization":"Basic " + btoa($rootScope.credentials.username+":"+$rootScope.credentials.password)
         }
       }
       
      $http(request).then(function(response) {
        $scope.response = response;
      });

    $scope.selectWarehouse = function(){
      var request = {
         method: "POST",
         url: "http://localhost:8080/api/warehouses",
         data: $scope.selectedWarehouse,
         headers: {
           "Content-Type": "application/json",
           "Authorization":"Basic " + btoa($rootScope.credentials.username+":"+$rootScope.credentials.password)
         }
       }
       
      $http(request).then(function() {
        $rootScope.warehouse=$scope.selectedWarehouse;
        location.href = "#/stockopname";
      });
    }
 }]);