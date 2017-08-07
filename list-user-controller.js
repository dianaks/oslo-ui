 angular.module('osloApp').controller('userListController',['$rootScope','$scope','$http',
 function  ($rootScope, $scope,$http) {

    if(!$rootScope.isLoggedIn){
      location.href = "#/login"

    }else if($rootScope.credentials.role === "ROLE_COUNTER"){
        location.href = "#/";

    }else{

      var request = {
       method: "GET",
       url: "http://localhost:8080/api/users?warehouse="+$rootScope.credentials.warehouse.data,
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
    }
 }]);
