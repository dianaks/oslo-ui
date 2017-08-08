 angular.module('osloApp').controller('loginController',['$rootScope','$scope','$http',
 function  ($rootScope,$scope,$http) {
    
    // $rootScope.isLoggedIn = false;
    $scope.credentials={
      username: "",
      password: "",
      warehouse:""
    };

        localStorage.setItem('isLoggedIn',false)
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        localStorage.removeItem('warehouse')
    
     $scope.authentication = function(){

       var request = {
         method: "GET",
         url: "http://localhost:8080/api/login",
         headers: {
           "Content-Type": "application/json",
           "Authorization":"Basic " + btoa($scope.credentials.username+":"+$scope.credentials.password)
         }
       }
        $http(request).then(function(response) {
          if(response.data.success){
            localStorage.setItem('isLoggedIn',true)
            localStorage.setItem('username',$scope.credentials.username)
            localStorage.setItem('token',btoa($scope.credentials.username+":"+$scope.credentials.password))
            localStorage.setItem('role', response.data.data.role)

            location.href = "#/warehouse";

          }else{
            swal("Wrong username or password!","error");
          }
        })
      };
 }]);
