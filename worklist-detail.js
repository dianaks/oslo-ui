
var worklistDetailController = angular.module('osloApp');

worklistDetailController.controller('worklistDetailController',['$scope','$http', '$routeParams', 
    function  ($scope,$http, $routeParams) {

    var request = {
        method: "GET",
        url: "http://localhost:8080/api/SKUs?id="+$routeParams.param,
        headers: {
            "Content-Type": "application/json",
            "Authorization":"Basic "+ localStorage.getItem('token')
        }
    }
    $http(request).then(function (response) {
        $scope.response=response;
    })
}])
;