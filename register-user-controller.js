angular.module('osloApp').controller('registerUserController',['$scope','$http',
function  ($scope,$http) {

    $scope.newUser = {};
    $scope.showpassword = false;
    $scope.newUser.role="ROLE_COUNTER";
    $scope.isCounter = true;
    $scope.maxSelection = "1";
    $scope.master=[];

    $('.selectpicker').selectpicker('render');

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
          "Authorization": "Basic " + btoa("super-admin-demo:123")
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
}]);
