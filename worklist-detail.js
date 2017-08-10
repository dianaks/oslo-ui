
var worklistDetailController = angular.module('osloApp');

worklistDetailController.controller('worklistDetailController',['$rootScope','$scope','$http', '$routeParams', 
    function  ($rootScope,$scope,$http, $routeParams){

        var skuIdTersimpan = "";
         $scope.methodInput = localStorage.getItem('methodInput');
         localStorage.setItem('stockOpnameId',$routeParams.param);

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

    var startCounting = function(){
        var request = {
            method: "PUT",
            url: "http://localhost:8080/api/updatestarttimestockopname?id="+$routeParams.param,
            headers: {

                "Content-Type": "application/json",
                "Authorization":"Basic "+ localStorage.getItem('token')
            }
        }
        $http(request).then(function (response) {
            $scope.response=response;
            
        })
     }

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
                location.href = "#/byStorage";
            } 
        startCounting()
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