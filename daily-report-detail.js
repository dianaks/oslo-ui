var dailyreportDetailController = angular.module('osloApp');

dailyreportDetailController.controller('dailyreportDetailController',['$scope','$http' , function  ($scope,$http) {


    $scope.skulist = [];
    $scope.uskulist = [];

    $scope.stockopnames=[{},{},{},{}];


//baru ngeget STO yg ada di date yg dicari
    var request = {
            method: "GET",
            url: "http://localhost:8080/api/SKUreport?date=2017-04-24",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa("admin-demo-one:123")
            }
        }
        $http(request).then(function (response) {
            $scope.stockopnames = response.data.data;
            // console.log(response.data.data)
            // console.log($scope.stockopnames[0].stockOpnameId)
        })

//ngeget listSKU yg ada dgn STO tertentu
    var getSkufromSTO = function (stoid) {
        // console.log(stoid)
        var request4 = {
            method: "GET",
            url: "http://localhost:8080/api/SKUs?id=" + stoid,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa("admin-demo-one:123")
            }
        }
        $http(request4).then(function (response) {
            $scope.skus = response.data.data;
            console.log($scope.skus[0].skuId)
            skulist.push($scope.skus)
            console.log($scope.skulist.length)
        })
    }

//ngeget list USKU yg ada dgn STO tertentu
    var getUSkufromSTO = function (stoid) {
        // console.log(stoid)
        var request4 = {
            method: "GET",
            url: "http://localhost:8080/api/unknownSKUs1?id="+stoid,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa("admin-demo-one:123")
            }
        }
        $http(request4).then(function (response) {
            $scope.uskus = response.data.data;
            console.log($scope.uskus[0].skuId)
            uskulist.push($scope.uskus)
            console.log($scope.uskulist.length)
        })
    }

    var interationAllSTO = function () {
        console.log($scope.stockopnames.length)
        for (i = 0; i < $scope.stockopnames.length; i++) {
            console.log($scope.stockopnames[i].stockOpnameId)
            getSkufromSTO($scope.stockopnames[i].stockOpnameId)
        }
    }

    interationAllSTO();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var interationAllSTOUnknown = function () {
        console.log($scope.stockopnames.length)
        for (i = 0; i < $scope.stockopnames.length; i++) {
            console.log($scope.stockopnames[i].stockOpnameId)
            getUSkufromSTO($scope.stockopnames[i].stockOpnameId)
        }
    }

    interationAllSTOUnknown();


}]);