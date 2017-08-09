 angular.module('osloApp').controller('userListController',['$rootScope','$scope','$http',
 function  ($rootScope, $scope,$http) {

    if(!localStorage.getItem('isLoggedIn')){
      location.href = "#/login"

    }else if(localStorage.getItem('role') === "ROLE_COUNTER"){
        location.href = "#/";

    }else{

      var request = {
       method: "GET",
       url: "http://localhost:8080/api/users?warehouse="+localStorage.getItem('warehouse'),
       headers: {
         "Content-Type": "application/json",
         "Authorization":"Basic " + localStorage.getItem('token')
       }
     }
     $http(request).then(function(response) {
       $scope.response = response;
       console.log(response.data.data)
     });

     function relocate_register(){
           location.href = "#/list-users/register-user";
      }
    }
 }]);
