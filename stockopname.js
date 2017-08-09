angular.module('osloApp').controller('stockopnameController',['$rootScope','$scope','$http', function  ($rootScope,$scope,$http) {
  
  let data = {};

  var getDataStockOpname = function(){
   var request = {
       method: "GET",
       url: "http://localhost:8080/api/stockopnames",
       headers: {
         "Content-Type": "application/json",
         "Authorization":"Basic " + localStorage.getItem('token')
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

    $scope.count = 0;
    $scope.totalSKU = 0;
    $scope.totalQty = 0;

  getDataStockOpname();
   

      var request1 = {
       method: "GET",
       url: "http://localhost:8080/api/users?warehouse="+localStorage.getItem('warehouse'),
       headers: {
         "Content-Type": "application/json",
         "Authorization":"Basic " + localStorage.getItem('token')
       }
     }
     $http(request1).then(function(response) {
       $scope.counters= response;
     });
    }

  $scope.clicky = function(index) {

    if($scope.data[index].checked){
      $scope.count++
      $scope.totalSKU += $scope.data[index].totalSKU
      $scope.totalQty += $scope.data[index].totalQty
    }else{
      $scope.count--
      $scope.totalSKU -= $scope.data[index].totalSKU
      $scope.totalQty -= $scope.data[index].totalQty
    }
  }

  $scope.assignCounter= function() {
    for (var n = 0; n < $scope.data.length; n++) {
       if($scope.data[n].checked){
        $scope.assignData.stockOpnameId = $scope.data[n].stockOpnameId

         var request2 = {
             method: "POST",
             url: "http://localhost:8080/api/assignments",
             data: {
              stockOpnameId:$scope.assignData.stockOpnameId,
              username:$scope.assignData.username
            },
             headers: {
               "Content-Type": "application/json",
               "Authorization":"Basic " + localStorage.getItem('token')
             }
           }
         
         $http(request2).then(function(response) {
           $scope.res = response;
           getDataStockOpname().then(function() {
            $('#myModal').modal('hide');
           });
         })
       }
    }
      $scope.count = 0;
    $scope.totalSKU = 0;
    $scope.totalQty = 0;
  }

}]);
