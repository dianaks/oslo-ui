angular.module('osloApp').controller('inputstorageController',['$rootScope','$scope','$http', '$routeParams' , 
    function  ($rootScope,$scope,$http, $routeParams) {
    // alert('halo');

    $scope.checkData={
        skuId:"",
        stoId:localStorage.getItem('stockOpnameId'),
        storageCode:""
    }
    $scope.skuReq={
        skuId:$routeParams.param,
        physicalQty:0,
        information:""
    };          

    var request1 = {
        method: "GET",
        url: "http://localhost:8080/api/storage?id="+localStorage.getItem('stockOpnameId'),
        headers: {
            "Content-Type": "application/json",
            "Authorization":"Basic "+ localStorage.getItem('token')
        }
    }

    $http(request1).then(function (response) {
        $scope.storageCodeList=response.data.data;
        console.log($scope.storageCodeList)
    })

    var request2 = {
        method: "POST",
        url: "http://localhost:8080/api/skubystorage",
        headers: {
            "Content-Type": "application/json",
            "data":$scope.checkdata,
            "Authorization":"Basic "+ localStorage.getItem('token')
        }
    }

    $http(request2).then(function (response) {
        $scope.check=response.data;
        console.log($scope.check)
    })

}]);