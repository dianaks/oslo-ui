angular.module('osloApp').controller('stockopnameController',['$rootScope','$scope','$http', function  ($rootScope,$scope,$http) {
  
  if(!$rootScope.isLoggedIn){
    location.href = "#/login";
  }else{

    $scope.assignData={
      stockOpnameId:"",
      username:""
    };

    var request = {
       method: "GET",
       url: "http://localhost:8080/api/stockopnames",
       headers: {
         "Content-Type": "application/json",
         "Authorization":"Basic " + btoa($rootScope.credentials.username+":"+$rootScope.credentials.password)
       }
     }
     $http(request).then(function(response) {
       $scope.datas = response;
       for (var i = $scope.datas.data.data.length - 1; i >= 0; i--) {
         $scope.datas.data.data[i].timeInString = new Date($scope.datas.data.data[i].waktuPembuatan).toDateString();
         $scope.datas.data.data[i].checked = false;
       }
     });

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

  $scope.assignCounter= function(){

    for (var n = 0; n < $scope.datas.data.data.length; n++) {
      console.log($scope.datas.data.data[n])
       if($scope.datas.data.data[n].checked){

        $scope.assignData.stockOpnameId = $scope.datas.data.data[n].stockOpnameId

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
         })
       }
    }
  }

}])
;
