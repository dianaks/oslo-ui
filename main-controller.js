 angular.module('osloApp').controller('mainController',['$rootScope','$scope','$http',
 function  ($rootScope,$scope,$http) {

        if(true){
          $rootScope.isLoggedIn = false;
        }else{
          $rootScope.isLoggedIn = true;

          $scope.credentials={
            username: $rootScope.username,
            password: $rootScope.password,
            warehouse: $rootScope.warehouse
          }; 
        }
    
      $scope.logout = function(){

        $rootScope.isLoggedIn = false;

        $scope.credentials={
          username: "",
          password: "",
          warehouse:""
        };  

        location.href = "#/login";

      }
 }]);
