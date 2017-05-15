angular.module('osloApp').controller('registerUserController',['$scope','$http',
function  ($scope,$http) {
    $scope.registerUser = function(){
      var newUser = {
        username:"demo-counter-five",
        password:"password",
        status:"Active",
        role:"ROLE_COUNTER",
        warehouse:['Cawang']
      }
      var request = {
        method: "POST",
        url: "http://localhost:8080/api/users",
        data: newUser,
        headers: {
          "Authorization": "Basic " + btoa("super-admin-demo:123")
        }
      }
      console.log(request);
      $http(request).then(function(response) {
          console.log(response)
      });
    }
}]);
