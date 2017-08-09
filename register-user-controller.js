angular.module('osloApp').controller('registerUserController',['$rootScope','$scope','$http',
function  ($rootScope,$scope,$http) {

    $scope.newUser = {};
    $scope.showpassword = false;
    $scope.newUser.role="ROLE_COUNTER";
    $scope.isCounter = true;
    $scope.maxSelection = "1";
    $scope.master=[];

    $('.selectpicker').selectpicker('render');

    if(localStorage.getItem('isLoggedIn')){
      if(!localStorage.getItem('role') == ROLE_COUNTER){
        $scope.checkRole = function(){
            $scope.reset();
            if($scope.newUser.role=="ROLE_ADMIN"){
                $scope.isCounter = false;
            }else {
                $scope.isCounter = true;
            }
            $('.selectpicker').selectpicker('render');

          }

          $scope.reset = function() {
              $scope.newUser.warehouse = angular.copy($scope.master);
            };


          $scope.registerUser = function(){
            alert($scope.newUser.warehouse);
            var request = {
              method: "POST",
              url: "http://localhost:8080/api/users",
              data: $scope.newUser,
              headers: {
                "Authorization": "Basic " + localStorage.getItem('token')
              }
            }
            $http(request).then(function(response) {
              if(response.data.success==true){
                  swal("Congrats!", "User "+$scope.newUser.username+" has been registered", "success");
                  $scope.newUser = {};
              }
              else{
                  swal("Error!", response.data.errorMessage, "error");
              }
            });
          }
      }else{
        swal("You Don't Have Permission","error")
      }
    }else{
      location.href = "#/login"
    }

    

    
}]);
