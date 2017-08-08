
var inputBySkuController  = angular.module('osloApp');

inputBySkuController  .controller('inputBySkuController  ',['$scope','$http', function  ($scope,$http) {

    var request = {
        method: "POST",
        url: "http://localhost:8080/api/updatestatus",
        headers: {

            "Content-Type": "application/json",
            "Authorization":"Basic "+ localStorage.getItem('token')
        }
    }
    $http(request).then(function (response) {
        $scope.response=response;
        console.log($scope.response)
    })

}])
;