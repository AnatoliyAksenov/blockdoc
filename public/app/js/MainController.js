(function() {
  'use strict';

  angular
    .module('App')
    .controller('MainController', MainController);

    MainController.inject = ['$scope', 'dataAssistant', 'socketUtils', '$timeout'];

    function MainController($scope, dataAssistant, socketUtils, $timeout) {
    	$scope.page = 'create';
		
		$scope.showCreate = function(){
			$scope.page = 'create';
		}

		$scope.showAccept = function(){
			$scope.page = 'accept';
		}

		$scope.showCheck = function(){
			$scope.page = 'check';
		}
						
    }
})();