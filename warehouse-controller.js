 angular.module('osloApp').controller('warehouseController',['$rootScope','$scope','$http',
 function  ($rootScope,$scope,$http) {

    if($rootScope.isLoggedIn){
      if($rootScope.credentials.role === "ROLE_ADMIN"){
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
              $rootScope.credentials.warehouse=$scope.selectedWarehouse;
              location.href = "#/";
            });
          }
      }else{
        location.href = "#/";
      }
    }else{
        location.href = "#/";
    }
   
 }]);