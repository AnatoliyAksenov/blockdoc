(function() {
  'use strict';

  angular
    .module('App')
    .directive('create', create);

  function create(){
    let directive = {
      restrict:'E',
      scope:{
      },
      templateUrl: '/templates/create.html',
      controller: Create
    };

    return directive;
  };
  
  
  Create.$inject = ['$scope', 'dataAssistant'];

  function Create($scope, dataAssistant){
    $scope.init = function(){
      
    }
  }

})();	
