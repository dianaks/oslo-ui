
var worklistDetailController = angular.module('osloApp');

worklistDetailController.controller('worklistDetailController',['$scope','$http', '$routeParams', 
    function  ($scope,$http, $routeParams) {

        var skuIdTersimpan = "";
         $scope.methodInput = localStorage.getItem('methodInput');

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

    $scope.selectMethod = function(inputBySKU){
            if(inputBySKU){
                $('#myModal').modal('toggle');
                $('.modal-backdrop').remove();
                localStorage.setItem('methodInput',"bySKU");
                location.href = "#/bySKU/"+skuIdTersimpan;
            }else{
                $('#myModal').modal('toggle');
                $('.modal-backdrop').remove();
                localStorage.setItem('methodInput',"byStorage");
                location.href = "#/byStorage/"+skuIdTersimpan;
            } 
    }

    $scope.simpanSKUid = function(skuId){
        skuIdTersimpan = skuId;
        console.log(skuIdTersimpan)
    }

    $scope.selesaikan = function(){
        localStorage.removeItem('methodInput')
        location.href = "#/worklist";
    }
}])
;