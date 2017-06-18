'use strict';

/**
 * @ngdoc overview
 * @name blockdocApp
 * @description
 * # blockdocApp
 *
 * Main module of the application.
 */
angular
    .module('blockdocApp', [
        // 'ngCookies',
        // 'ngResource',
        'ngRoute',
        'ngSanitize'
        // 'ngTouch'
    ])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'about'
            })
        .otherwise({
         redirectTo: '/'
         });
    });
