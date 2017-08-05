
var stockopnameController = angular.module('osloApp');

stockopnameController.controller('stockopnameController',['$scope','$http', function  ($scope,$http) {


	var request = {
       method: "GET",
       url: "http://localhost:8080/api/stockopnames",
       headers: {
         "Content-Type": "application/json",
         "Authorization":"Basic " + btoa("admin-demo-one:123")
       }
     }
     $http(request).then(function(response) {
       $scope.datas = response;
     });

    // var url = "http://localhost:8080/api/stockopnames";

    // $http.get(url).then( function(response) {
    //     $scope.datas = response;
    //     var length = Object.keys(response.data).length;

    // });
}])
;
