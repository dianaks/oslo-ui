angular.module('osloApp').controller('registerUserController',['$scope','$http',
function  ($scope,$http) {
    var url = "localhost:8080/api/users";
    $scope.registerUser = function(){
      $scope.newUser = {
        username:"counter-demo-five",
        password:"password",
        role:"counter",
        warehouse:"Cawang"
      }
      alert($scope.newUser.username);
    }
    // $http.post(url,newUser);
}]);
