 angular.module('osloApp').controller('userListController',['$scope','$http',
 function  ($scope,$http) {
     var url = "http://localhost:8080/api/users?warehouse=Cakung";
     $http.get(url).then( function(response) {
         $scope.response = response;
     });

     function relocate_register(){
           location.href = "#/list-users/register-user";
      }


 }]);
