
var worklistController = angular.module('osloApp');

worklistController.controller('worklistController',['$scope','$http',
    function  ($scope,$http) {
        var request = {
            method: "GET",
            url: "http://localhost:8080/api/worklist",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic "+ localStorage.getItem('token')
            }
        }
        $http(request).then(function (response) {
            $scope.response=response;
        })
}]);