(function() {
  'use strict';

  angular
    .module('App')
    .directive('check', check);

  function check(){
    let directive = {
      restrict:'E',
      scope:{
      },
      templateUrl: '/templates/check.html',
      controller: Check
    };

    return directive;
  };
  
  
  Check.$inject = ['$scope', 'dataAssistant', "_"];

  function Check($scope, dataAssistant, _){
    $scope.init = function(){
      
    }
  }

})();	
