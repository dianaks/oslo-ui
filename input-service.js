
angular.app('osloApp').factory('inputService',['$resource', inputFunction]);

function inputFunction ($resource) {
    var url = "http://localhost:8080/api/SKUs?id=STO-001";
return $resource(url,{},{
    getContent:{method: "GET",headers: {"Content-Type": "application/json", "Authorization": "Basic " + btoa("demo-counter-one:123")}}
    });
};