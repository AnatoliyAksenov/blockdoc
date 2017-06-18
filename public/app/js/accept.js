(function() {
  'use strict';

  angular
    .module('App')
    .directive('accept', accept);

  function accept(){
    let directive = {
      restrict:'E',
      scope:{
      },
      templateUrl: '/templates/accept.html',
      controller: Accept
    };

    return directive;
  };
  
  
  Accept.$inject = ['$scope', 'dataAssistant', "_"];

  function Accept($scope, dataAssistant, _){
    $scope.init = function(){
      
    }
  }

})();	
