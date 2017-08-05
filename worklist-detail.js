
var worklistDetailController = angular.module('osloApp');

worklistDetailController.controller('worklistDetailController',['$scope','$http', function  ($scope,$http) {

    var request = {
        method: "GET",
        url: "http://localhost:8080/api/SKUs?id=STO-001",
        headers: {

            "Content-Type": "application/json",
            "Authorization":"Basic "+ btoa("demo-counter-one:123")
        }
    }
    $http(request).then(function (response) {
        $scope.response=response;
        console.log($scope.response)
    })

}])
;