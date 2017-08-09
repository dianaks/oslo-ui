 angular.module('osloApp').controller('mainController',['$rootScope','$scope','$http',
 function  ($rootScope,$scope,$http) {

  $scope.credentials={
   username:localStorage.getItem('username')
  }

  if(!localStorage.getItem('isLoggedIn')){
    $rootScope.isLoggedIn = false;

  }else{
    $rootScope.isLoggedIn = true; 
  }

  $scope.$on('onLogin', function(event) {
    $scope.credentials={
   username:localStorage.getItem('username')
  }
  });

  $scope.logout = function(){
    localStorage.setItem('isLoggedIn',false)
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('warehouse')
    localStorage.removeItem('methodInput')
    localStorage.removeItem('stockOpnameId')
    localStorage.removeItem('qtyFisikFix')
    localStorage.removeItem('inputBySKU')
    $scope.credentials={
     username:""
    }

    location.href = "#/login";
  }
}]);
