'use strict';

/**
 * @ngdoc function
 * @name blockdocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blockdocApp
 */
angular.module('blockdocApp')
  .controller('MainCtrl', function ($location) {
      console.log('MainCtrl called with $location: ', $location);
  });
