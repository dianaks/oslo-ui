
var stockopnameDetailController = angular.module('osloApp');

stockopnameDetailController.controller('stockopnameDetailController',['$scope','$http', function  ($scope,$http) {
    var url = "http://localhost:8080/api/SKUs";

    $http.get(url+id).then( function(response) {
        $scope.datas = response;


    });
    $scope.detailstockOpname = function () {
        $scope.getDetailStockOpname = function () {
            var request = {
                method: "GET",
                url: "http://localhost:8080/api/SKUs?id="+$scope.stockOpnameId,
                headers: {

                 "Content-Type": "application/json",
                    "Authorization":"Basic "+ btoa("demo-counter-one:123")
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