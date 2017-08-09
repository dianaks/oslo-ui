 angular.module('osloApp').controller('mainController',['$rootScope','$scope','$http',
 function  ($rootScope,$scope,$http) {

        $scope.credentials={
            username: '',
            warehouse: ''
          }; 

        if(!localStorage.getItem('isLoggedIn')){
          $rootScope.isLoggedIn = false;

        }else{
          $rootScope.isLoggedIn = true;

          $scope.credentials={
            username: localStorage.getItem('username'),
            warehouse: localStorage.getItem('warehouse')
          }; 
        }
    
      $scope.logout = function(){

        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        localStorage.removeItem('warehouse')
        localStorage.removeItem('methodInput')
        localStorage.removeItem('stockOpnameId')
        localStorage.removeItem('qtyFisikFix')
        localStorage.removeItem('inputBySKU')

        location.href = "#/login";
      }
 }]);
