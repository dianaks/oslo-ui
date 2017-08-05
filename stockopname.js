//
// var stockopnameController = angular.module('osloApp');
//
// stockopnameController.controller('stockopnameController',['$scope','$http', function  ($scope,$http) {
//     var url = "http://localhost:8080/api/stockopnames";
//
//     $http.get(url).then( function(response) {
//         $scope.datas = response;
//         var length = Object.keys(response.data).length;
//
//     });
// }])
// ;



var stockopnameController = angular.module('osloApp');

worklistController.controller('worklistController',['$scope','$http',
    function  ($scope,$http) {



        var request = {
            method: "GET",
            url: "http://localhost:8080/api/worklist",
            headers: {

                "Content-Type": "application/json",
                "Authorization":"Basic "+ btoa("demo-counter-one:123")
            }
        }
        $http(request).then(function (response) {
            $scope.response=response;
            console.log($scope.response)
        })

    }])
;










//
//
// var stockopnameController = angular.module('osloApp');
//
// stockopnameController.controller('stockopnameController',['$scope','$http', function  ($scope,$http) {
//     var url = "http://localhost:8080/api/stockopnames";
//
//     $http.get(url).then( function(response) {
//         $scope.datas = response;
//
//
//     });
//     $scope.detailstockOpname = function () {
//         $scope.getStockOpname = function () {
//             var request = {
//                 method: "GET",
//                 url: "http://localhost:8080/api/stockopnames,
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization":"Basic "+ btoa("super-admin-demo:123")
//                 }
//             }
//             $http(request).then(function (response) {
//                 $scope.response=response;
//                 //console.Log($scope.response)
//             })
//         }
//     }
// }])
// ;