var osloAppRouting = angular.module('osloApp');
osloAppRouting.config(function($routeProvider) {
  $routeProvider
      // route for the home page

      .when('/tes:param', {
          templateUrl : 'static/tes.html',
          controller  : 'inputstorageController',
          label: 'User List', options: {hidden: false}
      })
  
      // .when('/inputbystorage/:param',{
      //     templateUrl : 'static/by-storage-baru.html',
      //     controller:'inputstorageController ',
      //     label: 'Input By Storage', options: {hidden: false}
      // })

      .when('/list-users', {
          templateUrl : 'static/list-users.html',
          controller  : 'userListController',
          label: 'User List', options: {hidden: false}
      })
      .when('/stockopname',{
        templateUrl : 'static/stockopname.html',
        controller: 'stockopnameController',
        label: 'Stock Opname', options: {hidden: false}
      })
      .when('/worklist',{
          templateUrl : 'static/worklist.html',
          controller: 'worklistController',
          label: 'Stock Opname', options: {hidden: false}
      })
      .when('/worklist-detail/:param',{
          templateUrl : 'static/worklist-detail.html',
          controller:'worklistDetailController',
          label: 'Stock Opname Detail', options: {hidden: false}
      })
      .when('/stockopname/stockopname-detail/:param',{
        templateUrl : 'static/stockopname-detail.html',
        controller:'stockopnameDetailController',
        label: 'Stock Opname Detail', options: {hidden: false}
      })
      .when('/daily-report/daily-report-detail',{
        templateUrl : 'static/daily-report-detail.html',
        controller:'',
        label: 'Daily Report Detail', options: {hidden: false}
      })
      .when('/daily-report',{
        templateUrl:'static/daily-report.html',
        controller:'',
        label: 'Daily Report', options: {hidden: false}
      })
      .when('/list-users/edit-user',{
        templateUrl:'static/edit-user.html',
        controller:'',
        label: 'Edit User', options: {hidden: false}
      })
      .when('/list-users/register-user',{
        templateUrl:'static/register-user.html',
        controller:'registerUserController',
        label: 'Register User', options: {hidden: false}
      })
      .when('/',{
        templateUrl:'static/welcome.html',
        controler:'',
        label: 'Home', options: {hidden: false}
      })
      .when('/login',{
        templateUrl:'static/login.html',
        controler:'loginController',
        label: 'Login', options: {hidden: false}
      })
      .when('/warehouse',{
        templateUrl:'static/warehouse.html',
        controler:'warehouseController',
        label: 'Warehouse', options: {hidden: true}
      })
});

osloAppRouting.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
