// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var osloApp = angular.module('osloApp', ['ngRoute']);

    // configure our routes
    osloApp.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/user-list', {
                templateUrl : 'static/list-users.html',
                controller  : 'mainController'
            })
            .when('/stockopname',{
              templateUrl : 'static/stockopname.html',
              controller: ''
            })
            .when('/stockopname-detail',{
              templateUrl : 'static/stockopname-detail.html',
              controller:''
            })
            .when('/daily-report-detail',{
              templateUrl : 'static/daily-report-detail.html',
              controller:''
            })
            .when('/daily-report',{
              templateUrl:'static/daily-report.html',
              controller:''
            })
            .when('/edit-user',{
              templateUrl:'static/edit-user.html',
              controller:''
            })
            .when('/register-user',{
              templateUrl:'static/register-user.html',
              controller:''
            })
    });

    // create the controller and inject Angular's $scope
    osloApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    osloApp.controller('editUserController', function($scope){
      $('.selectpicker').selectpicker('render');
    })
