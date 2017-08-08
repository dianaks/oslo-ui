
var stockopnameDetailController = angular.module('osloApp');

stockopnameDetailController.controller('stockopnameDetailController',['$scope','$http', '$routeParams' , function  ($scope,$http, $routeParams) {

if(localStorage.getItem('isLoggedIn')){
  if(!localStorage.getItem('role') == ROLE_COUNTER){
    var request = {
        method: "GET",
        url: "http://localhost:8080/api/SKUs?id="+$routeParams.param,
        headers: {

            "Content-Type": "application/json",
            "Authorization":"Basic "+ btoa("admin-demo-one:123")
        }
    }
    $http(request).then(function (response) {
        $scope.response=response;
        console.Log($scope.response)
    })
  }
} 

}])
;