
var dailyreportDetailController = angular.module('osloApp');

dailyreportDetailController.controller('dailyreportDetailController',['$scope','$http' , function  ($scope,$http) {

    var request = {
        method: "GET",
        url: "http://localhost:8080/api/allSKU",
        headers: {

            "Content-Type": "application/json",
            "Authorization":"Basic "+ btoa("admin-demo-one:123")
        }
    }
    $http(request).then(function (response) {
        $scope.data=response.data.data;

    })

}])
;