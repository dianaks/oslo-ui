angular.module('osloApp').controller('inputstorageController',['$scope','$http', '$routeParams' , function  ($scope,$http, $routeParams) {
    alert('halo');
    var request1 = {
        method: "GET",
        url: "http://localhost:8080/api/SKU?id="+$routeParams.param,
        headers: {

            "Content-Type": "application/json",
            "Authorization":"Basic "+ btoa("demo-counter-one:123")
        }
    }
    $http(request1).then(function (response) {
        $scope.response=response;

    })


}])
;



