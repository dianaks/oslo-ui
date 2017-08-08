var inputbystorageController = angular.module('osloApp');

inputbystorageController.controller('inputbystorageController',['$scope','$http', '$routeParams' , function  ($scope,$http, $routeParams) {

    var request = {
        method: "GET",
        url: "http://localhost:8080/api/SKU?id="+$routeParams.param,
        headers: {

            "Content-Type": "application/json",
            "Authorization":"Basic "+ localStorage.getItem('token')
        }
    }
    $http(request).then(function (response) {
        $scope.response=response;
        alert('halo');
    })


}])
;




































//
// var inputbystorageController = angular.module('osloApp');
//
// inputbystorageController.controller('inputbystorageController',['$scope','$http', function  ($scope,$http) {
// var dataupdatequantity= {
//     skuId: $scope.skuId,
//     physicalQty: $scope.physicalQty
//     }
//
//     var request = {
//         method: "GET",
//         url: "http://localhost:8080/api/SKUs?id=STO-001",
//         // data: dataupdatequantity,
//         headers: {
//
//             "Content-Type": "application/json",
//             "Authorization":"Basic "+ btoa("demo-counter-one:123")
//         }
//     }
//     $http(request).then(function (response) {
//         $scope.response=response;
//     })
//
// }])
// ;



//dicomment 21-7-2017 jam 19.38 untuk nyoba pake cara stockopname.js
// var inputbystorageController  = angular.module('osloApp');
// inputbystorageController .controller('inputbystorageController ',['$scope','$http', function  ($scope,$http) {
//     var request = {
//         method: "GET",
//         url: "http://localhost:8080/api/SKUs?id=STO-001",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization":"Basic "+ btoa("demo-counter-one:123")
//         }
//     }
//     $http(request).then(function (response) {
//         $scope.dataditerima=response;
//         console.log($scope.dataditerima)
//     })
// }])
// ;



var inputbystorageController = angular.module('osloApp');

inputbystorageController.controller('inputbystorageController',['$scope','$http', function  ($scope,$http) {
// inputbystorageController.controller('inputbystorageController',['$scope', function  ($scope) {
    var url = "http://localhost:8080/api/SKUs?id=STO-001";

    // .controller('Controller Name', ['$http', function($http) {
    //     $http.defaults.headers.common['Authorization'] = 'Basic ' + demo-counter-one + ':' + 123;
    // }]);

    $http.defaults.headers.common['Authorization'] = 'Basic ' + demo-counter-one + ':' + 123;
   $http.get(url).then( function(response) {
       $scope.dataditerima = response;
        var length = Object.keys(response.data).length;

    // var config = {
    //     params: {
    //         id: STO-001,
    //
    //     }
    // }
    //
    // $http.get('http://localhost:8080/api/SKUs?id=STO-001', config).then( function(response) {
$scope.dataditerima = response.data;
//var length = Object.keys(response.data).length;



        });
}])
;