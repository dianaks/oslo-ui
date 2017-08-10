angular.module('osloApp').controller('inputBySKUController',['$scope','$http','$routeParams',
    function($scope,$http, $routeParams) {
    
    $scope.strgCode
    $scope.qtyFisik = 0;
    $scope.SKUid = "";
    $scope.statusHabis = false;

    $scope.skuReq={
        skuId:$routeParams.param,
        physicalQty:0,
        information:""
    };

    var allowed = false;

    var request = {
        method: "GET",
        url: "http://localhost:8080/api/SKU?id="+$routeParams.param,
        headers: {
            "Content-Type": "application/json",
            "Authorization":"Basic "+ localStorage.getItem('token')
        }
    }
    $http(request).then(function (response) {
        $scope.skuInfo=response.data.data;
    })

    $scope.submitQtyFisik = function(){

        if($scope.skuReq.physicalQty==0 && $scope.statusHabis){
            $scope.skuReq.information="Barang Habis"

        }else if($scope.skuReq.physicalQty==0){
            $scope.skuReq.information="Tidak Dihitung"
        }else{
            $scope.skuReq.information="Sudah Dihitung"
        }

        var request = {
            method: "POST",
            url: "http://localhost:8080/api/updatestatus",
            data: $scope.skuReq,
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic "+ localStorage.getItem('token')
            }
        }
        $http(request).then(function (response) {
            $scope.response=response;
            console.log($scope.response)
            location.href = "#/worklist-detail/"+localStorage.getItem('stockOpnameId');
        })

    }

    $scope.barangHabis = function(){
        $scope.statusHabis = true;
        swal("Berhasil!", "Informasi barang habis berhasil disimpan","success")
    }

    $scope.patenkanQty = function(){
        if(allowed){
           localStorage.setItem('qtyFisikFix',$scope.skuReq.physicalQty)
        $scope.qtyFisik = localStorage.getItem('qtyFisikFix') 
        }else{
            swal("Tidak Diizinkan!","Isikan dahulu storage code yang sesuai", "error")
        }       
        
    }

    $scope.checkStorageCode = function(){
        if($scope.strgCode == $scope.skuInfo.storageCode){
            allowed = true;
        }else{
            swal("storageCode Salah!","Anda tidak bisa mengisi SKU Id jika storage code yang anda masukkan salah", "error")
        }
    }

    $scope.checkSKUid = function(){
        if(allowed){
           if($scope.SKUid == $scope.skuReq.skuId){
                $scope.SKUid ="";
                $scope.skuReq.physicalQty++;
                $scope.qtyFisik++;
                localStorage.setItem('qtyFisikFix',$scope.physicalQty)
                swal("Berhasil Ditambahkan!","","success")
            }else{
                $scope.SKUid ="";
                swal("SKU Id Salah!","Isikan SKU Id dengan benar", "error")
            } 
        }else{
            swal("Tidak Diizinkan!","Isikan dahulu storage code yang sesuai", "error")
        }
        
    }

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


}]);
