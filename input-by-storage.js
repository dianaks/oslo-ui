angular.module('osloApp').controller('inputstorageController',['$rootScope','$scope','$http', '$routeParams' , 
    function  ($rootScope,$scope,$http, $routeParams) {
    // alert('halo');

    var allowed = false;

    $scope.idx=0;

    $scope.qtyFix=0;
    $scope.checkResults;
    $scope.storageCodeList=[];
    $scope.storageInput="";

    $scope.currentData = {
        storageCode:"",
        skuId: "",
        stoId:localStorage.getItem('stockOpnameId'),
        storageCode:"",
        physicalQty: 0,
        information: 0,
    };
    $scope.checkDataBaru = [];

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
        $scope.scLong = $scope.storageCodeList.length;
        $scope.currentData.storageCode = $scope.storageCodeList[$scope.idx];

        for (var i = $scope.storageCodeList.length - 1; i >= 0; i--) {
            $scope.checkDataBaru.push({
                storageCode: $scope.storageCodeList[i],
                skuId: "",
                stoId:localStorage.getItem('stockOpnameId'),
                storageCode:$scope.storageCodeList[$scope.idx],
                physicalQty: 0,
                information: 0,
            })
        }
    })

    var storageCodeIteration = function(index){
        $scope.scNow = $scope.storageCodeList[index];
    }
    
    $scope.checkStorageCode = function(){
        if($scope.storageInput== $scope.currentData.storageCode){
            allowed = true;
            swal("Barcode Sesuai!")
        }else{
            swal("storageCode Salah!","Anda tidak bisa mengisi SKU Id jika storage code yang anda masukkan salah", "error")
        }
    }

    $scope.checkSKUid = function(){
        if(allowed){
             var request4 = {
                method: "POST",
                url: "http://localhost:8080/api/skubystorage",
                data:{
                skuId:$scope.currentData.skuId,
                stoId:localStorage.getItem('stockOpnameId'),
                storageCode:$scope.currentData.storageCode
                },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Basic "+ localStorage.getItem('token')
                }
            }
            $http(request4).then(function (response) {
                $scope.checkResult=response.data; 
                if($scope.checkResult.sto && $scope.checkResult.storageCode){
                    $scope.currentData.physicalQty++;
                    $scope.qtyFix++;
                    // localStorage.setItem('qtyFisikFix',$scope.physicalQty)
                    swal("Berhasil Ditambahkan!","","success")
                }else if($scope.checkResult.sto){
                    var request = {
                        method: "POST",
                        url: "http://localhost:8080/api/unknownSKUs",
                        data: $scope.uskuReq={
                                unknownSKUid:$scope.currentData.skuId,
                                storageCode:$scope.currentData.storageCode,
                                physicalQty:$scope.currentData.physicalQty,
                                stockOpnameId:localStorage.getItem('stockOpnameId')      
                            },
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization":"Basic "+ localStorage.getItem('token')
                        } 
                    }
                    $http(request).then(function (response) {
                            $scope.unknownSKU=response;
                    })

                    swal("Tidak Ditemukan","SKU yang anda masukkan tidak ada di"+$scope.scNow, "error")
                }else{
                    console.log("error")
                }
            })
        }

        else{
            swal("Tidak Diizinkan!","Isikan dahulu storage code yang sesuai", "error")
        }    
    }

    $scope.patenkanQty = function(){
        if(allowed){
        $scope.currentData.physicalQty=$scope.qtyFix;
        }else{
            swal("Tidak Diizinkan!","Isikan dahulu storage code yang sesuai", "error")
        }       
        
    }

    $scope.submitQtyFisik = function(idx){

        if($scope.currentData.physicalQty==0 && $scope.statusHabis){
            $scope.currentData.information="Barang Habis"

        }else if($scope.currentData.physicalQty==0){
            $scope.currentData.information="Tidak Dihitung"
        }else{
            $scope.currentData.information="Sudah Dihitung"
        }

        var request = {
            method: "POST",
            url: "http://localhost:8080/api/updatestatus",
            data: {
                skuId:$scope.currentData.skuId,
                physicalQty:$scope.currentData.physicalQty,
                information:$scope.currentData.information
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic "+ localStorage.getItem('token')
            }
        }
        $http(request).then(function (response) {
            $scope.response=response;

            $scope.idx += idx;
            $scope.currentData.storageCode = $scope.storageCodeList[$scope.idx];

            $scope.checkDataBaru[$scope.idx] = $scope.currentData;

            $scope.currentData = {
                storageCode:"",
                skuId: "",
                stoId:localStorage.getItem('stockOpnameId'),
                storageCode:$scope.storageCodeList[$scope.idx],
                physicalQty: 0,
                information: 0,
            };
        })

    var finishCounting = function(){
        var request = {
            method: "PUT",
            url: "http://localhost:8080/api/updatefinishtimestockopname?id="+localStorage.getItem('stockOpnameId'),
            headers: {

                "Content-Type": "application/json",
                "Authorization":"Basic "+ localStorage.getItem('token')
            }
        }
        $http(request).then(function (response) {
            $scope.response=response;
            localStorage.removeItem('methodInput')
            location.href = "#/worklist";
        })
     }


    $scope.selesaikan = function(){
        var request = {
            method: "PUT",
            url: "http://localhost:8080/api/updatesto",
            data: localStorage.getItem('stockOpnameId'),
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic "+ localStorage.getItem('token')
            }
        }
        $http(request).then(function (response) {
            $scope.response=response;
        }).then(finishCounting)
    }
    }
}]);