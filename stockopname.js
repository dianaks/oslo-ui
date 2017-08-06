
var stockopnameController = angular.module('osloApp');

stockopnameController.controller('stockopnameController',[$rootScope,'$scope','$http', function  ($rootScope,$scope,$http) {


	var request = {
       method: "GET",
       url: "http://localhost:8080/api/stockopnames",
       headers: {
         "Content-Type": "application/json",
         "Authorization":"Basic " + btoa($rootScope.credentials.username+":"+$rootScope.credentials.password)
       }
     }
     $http(request).then(function(response) {
       $scope.datas = response;
     });

}])
;
