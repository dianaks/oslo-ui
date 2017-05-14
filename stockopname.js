
var stockopnameController = angular.module('osloApp');

stockopnameController.controller('stockopnameController',['$scope','$http', function  ($scope,$http) {
    var url = "http://localhost:8080/api/stockopnames";

    $http.get(url).then( function(response) {
        $scope.datas = response;
        var length = Object.keys(response.data).length;

    });
}])
;
