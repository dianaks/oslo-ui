
var worklistController = angular.module('osloApp');

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
            //console.log($scope.response)
        })

}])
;