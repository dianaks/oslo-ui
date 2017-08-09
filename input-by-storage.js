angular.module('osloApp').controller('inputstorageController',['$scope','$http', '$routeParams' , function  ($scope,$http, $routeParams) {
    // alert('halo');

    $scope.data={
        skuId: "",
        physicalQty: null,
        information: "Belum Dihitung"
    }

    var request1 = {
        method: "GET",
        url: "http://localhost:8080/api/SKUs?id=STO-001",
        headers: {
            "Content-Type": "application/json",
            "Authorization":"Basic "+ localStorage.getItem('token')
        }
    }

    $http(request1).then(function (response) {
        $scope.skuData=response.data.skuData;
    })

// $scope.updateQtyAndStatus = function() {
//     var request2 = {
//         method: "POST",
//         url: "http://localhost:8080/api/updatequantityandstatus",
//         data: $scope.physicalQty,
//         headers: {
//
//             "Content-Type": "application/json",
//             "Authorization":"Basic "+ btoa("demo-counter-one:123")
//         }
//     }
// }

}])
;



