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
            .when('/worklist', {
                templateUrl: 'static/worklist.html',
                controller:''
            })
            .when('/detailworklist', {
                templateUrl: 'static/detailworklist.html',
                controller:''
            })
            .when('/pilihmetodeinput', {
                templateUrl: 'static/popupmetodeinput.html',
                controller:''
            })
            .when('/barangtidakada', {
                templateUrl: 'static/popupbarangtidakada.html',
                controller:''
            })
            .when('/selesai', {
                templateUrl: 'static/popupselesai.html',
                controller:''
            })
            .when('/inputbysku', {
                templateUrl: 'static/inputbysku.html',
                controller:''
            })
            .when('/inputbyskuvalid', {
                templateUrl: 'static/inputbyskuvalid.html',
                controller:''
            })
            .when('/inputbyskuinvalidstorage', {
                templateUrl: 'static/inputbyskuinvalidstorage.html',
                controller:''
            })
            .when('/inputbyskuinvalidsku', {
                templateUrl: 'static/inputbyskuinvalidsku.html',
                controller:''
            })

    });

    // create the controller and inject Angular's $scope
    osloApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
