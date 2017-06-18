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
    'ngSanitize',
    // 'ngTouch'
  ])
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
      .otherwise({
        redirectTo: '/'
      });
  });
