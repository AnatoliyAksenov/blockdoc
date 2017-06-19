(function() {
  'use strict';

  angular
    .module('App')
    .controller('MainController', MainController);

    MainController.inject = ['$scope', 'dataAssistant', 'socketUtils', '$timeout', '$window'];

    function MainController($scope, dataAssistant, socketUtils, $timeout, $window) {
    	$scope.page = 'create';
			$scope.main_aggreement = 'Вступая в ряды присоединившихся торжественно клянусь достойно использовать адрес ';
			$scope.contracts = {};

			$scope.init = function(){
				let agreement = {};
				agreement.abi = [{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_hash","type":"string"}],"payable":false,"type":"constructor"}];
				
				agreement.address = '0xe81a92f201054ccc208acafd67d1e32a7b6bd584';
				$scope.contracts.agreement = agreement;
				

				if($window.web3 !== undefined){
					let agreement = $scope.contracts.agreement;
					$scope.contracts.agreement.contract = $window.web3.eth.contract(agreement.abi).at(agreement.address);
				}
				
			}
		
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