 angular.module('osloApp').controller('userListController',['$rootScope','$scope','$http',
 function  ($rootScope, $scope,$http) {

    if(!$rootScope.credentials){
      location.href = "#/";
    }

     var request = {
       method: "POST",
       url: "http://localhost:8080/api/users",
       headers: {
         "Content-Type": "application/json",
         "Authorization":"Basic " + btoa($rootScope.credentials.username+":"+$rootScope.credentials.password)
       }
     }
     $http(request).then(function(response) {
       $scope.response = response;
     });

     function relocate_register(){
           location.href = "#/list-users/register-user";
      }




 }]);
