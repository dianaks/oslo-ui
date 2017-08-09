
var worklistController = angular.module('osloApp');

worklistController.controller('worklistController',['$scope','$http',
    function  ($scope,$http) {
          localStorage.setItem('methodInput',"")
        var request = {
            method: "GET",
            url: "http://localhost:8080/api/worklist",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic "+ localStorage.getItem('token')
            }
        }
        $http(request).then(function (response) {
            $scope.response=response.data.data;
            console.log(response)

            // for (var i = 0; i <= $scope.response.data.data.length; i++) {
            //     $scope.response.data.data[i].waktuPembuatan
            // }
        })
}]);