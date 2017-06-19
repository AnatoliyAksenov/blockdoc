'use strict';

angular
    .module('blockdocApp', [
        'ngRoute',
        'ngSanitize'
    ])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'mainCtrl'
            })
            /*.when('/chain', {
                templateUrl: 'views/chain.html',
                controller: 'ChainCtrl',
                controllerAs: 'chainCtrl'
            })
            .when('/sign', {
                templateUrl: 'views/sign.html',
                controller: 'SignCtrl',
                controllerAs: 'signCtrl'
            })
            .when('/verify', {
                templateUrl: 'views/verify.html',
                controller: 'VerifyCtrl',
                controllerAs: 'verifyCtrl'
            })*/
        .otherwise({
         redirectTo: '/'
         });
    });
