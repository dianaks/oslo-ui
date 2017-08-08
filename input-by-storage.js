var inputByStorageController = angular.module('osloApp');

inputByStorageController.controller('inputByStorageController',['$scope','$http', '$routeParams',
 function  ($scope,$http, $routeParams) {

    var request = {
        method: "GET",
        url: "http://localhost:8080/api/SKU?id="+$routeParams.param,
        headers: {

            "Content-Type": "application/json",
            "Authorization":"Basic "+ localStorage.getItem('token')
        }
    }
    $http(request).then(function (response) {
        $scope.response=response;
        alert('halo');
    })
}]);