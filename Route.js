var osloAppRouting = angular.module('osloApp');
osloAppRouting.config(function($routeProvider) {
  $routeProvider
      // route for the home page
      .when('/list-users', {
          templateUrl : 'static/list-users.html',
          controller  : 'mainController',
          label: 'User List', options: {hidden: false}
      })
      .when('/stockopname',{
        templateUrl : 'static/stockopname.html',
        controller: 'stockopnameController',
        label: 'Stock Opname', options: {hidden: false}
      })
      .when('/stockopname/stockopname-detail',{
        templateUrl : 'static/stockopname-detail.html',
        controller:'',
        label: 'Stock Opname Detail', options: {hidden: false}
      })
      .when('/daily-repost/daily-report-detail',{
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
        controller:'',
        label: 'Register User', options: {hidden: false}
      })
      .when('/',{
        templateUrl:'static/welcome.html',
        controler:'',
        label: 'Home', options: {hidden: false}
      })
      .when('/warehouse',{
        templateUrl:'static/warehouse.html',
        controler:'',
        label: 'Warehouse', options: {hidden: true}
      })
});

osloAppRouting.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
