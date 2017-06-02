 angular.module('osloApp').controller('userListController',['$scope','$http',
 function  ($scope,$http) {
     var request = {
       method: "GET",
       url: "http://localhost:8080/api/users?warehouse=Cakung",
       headers: {
         "Content-Type": "application/json",
         "Authorization":"Basic " + btoa("super-admin-demo:123")
       }
     }
     $http(request).then(function(response) {
       $scope.response = response;
     });

     function relocate_register(){
           location.href = "#/list-users/register-user";
      }




 }]);
