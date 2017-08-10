var stockopnameDetailController = angular.module('osloApp');

stockopnameDetailController.controller('stockopnameDetailController',['$scope','$http', '$routeParams' , 
    function  ($scope,$http, $routeParams) {

    localStorage.setItem('stockOpnameId',$routeParams.param)

      var getUnknownSKU = function(){
        var request = {
            method: "GET",
            url: "http://localhost:8080/api/unknownSKUs?id="+$routeParams.param,
            headers: {

                "Content-Type": "application/json",
                "Authorization":"Basic "+ localStorage.getItem('token')
            }
        }
        $http(request).then(function (response) {
            $scope.usku=response.data.data;
            console.log("hula");
        })
     }

    var getAllSKU = function(){
        var request = {
            method: "GET",
            url: "http://localhost:8080/api/SKUs?id="+$routeParams.param,
            headers: {

                "Content-Type": "application/json",
                "Authorization":"Basic "+ localStorage.getItem('token')
            }
        }
        console.log("halo");
        $http(request).then(function (response) {
            console.log("hai");
            $scope.response=response;
            getUnknownSKU();
        })
     }


        var request = {
            method:"GET",
            url:"http://localhost:8080/api/stockopname?id="+$routeParams.param,
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic "+ localStorage.getItem('token')
            }
        }
        return $http(request).then(function (response) {
            $scope.info=response.data.data;
            console.log($scope.info)

            $scope.info.waktuMulai = new Date($scope.info.startCountingTime).toTimeString();
            $scope.info.waktuSelesai = new Date($scope.info.finishCountingTime).toTimeString();
            $scope.info.waktuBuat = new Date($scope.info.waktuPembuatan).toDateString();

            getAllSKU();
        })
}]);