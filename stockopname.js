angular.module('osloApp').controller('stockopnameController',['$rootScope','$scope','$http', function  ($rootScope,$scope,$http) {
  
  let data = {};

  var getDataStockOpname = function(){
   var request = {
       method: "GET",
       url: "http://localhost:8080/api/stockopnames",
       headers: {
         "Content-Type": "application/json",
         "Authorization":"Basic " + btoa($rootScope.credentials.username+":"+$rootScope.credentials.password)
       }
     }
     return $http(request).then(function(response) {
       $scope.data = response.data.data;
       for (var i = $scope.data.length - 1; i >= 0; i--) {
         $scope.data[i].timeInString = new Date($scope.data[i].waktuPembuatan).toDateString();
         $scope.data[i].checked = false;
         data = $scope.data;
       }
    });
  }

  if(!$rootScope.isLoggedIn){
    location.href = "#/login";
  }else{

    $scope.assignData={
      stockOpnameId:"",
      username:""
    };

  getDataStockOpname();
   

      var request1 = {
       method: "GET",
       url: "http://localhost:8080/api/users?warehouse="+$rootScope.credentials.warehouse.data,
       headers: {
         "Content-Type": "application/json",
         "Authorization":"Basic " + btoa($rootScope.credentials.username+":"+$rootScope.credentials.password)
       }
     }
     $http(request1).then(function(response) {
       $scope.counters= response;
     });
    }

  $scope.clicky = function(index) {
    $scope.data[index].checked = !$scope.data[index].checked;
    data[index].checked = !data[index].checked;
    console.log($scope.data);
  }

  $scope.assignCounter= function() {
    for (var n = 0; n < $scope.data.length; n++) {
      console.log($scope.data[n])
       if($scope.data[n].checked){

        $scope.assignData.stockOpnameId = $scope.data[n].stockOpnameId

         var request2 = {
             method: "POST",
             url: "http://localhost:8080/api/assignments",
             data: $scope.assignData,
             headers: {
               "Content-Type": "application/json",
               "Authorization":"Basic " + btoa($rootScope.credentials.username+":"+$rootScope.credentials.password)
             }
           }
         
         $http(request2).then(function(response) {
           $scope.res = response;
           getDataStockOpname().then(function() {
            $('#myModal').modal('toggle')
           });
         })
       }
    }
  }



}])
;
