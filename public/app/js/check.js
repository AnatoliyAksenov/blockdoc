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
  
  
  Check.$inject = ['$scope', 'dataAssistant', "$window"];

  function Check($scope, dataAssistant, $window){
    
    $scope.test = {};

    $scope.init = function(){
      var test = $window.web3.eth.contract([{"constant":true,"inputs":[],"name":"decrypt","outputs":[{"name":"r","type":"uint256"},{"name":"m","type":"uint256"},{"name":"mm","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"msg","type":"uint256"},{"name":"e","type":"uint256"},{"name":"m","type":"uint256"}],"name":"func","outputs":[{"name":"r","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"msg","type":"uint256"},{"name":"e","type":"uint256"},{"name":"m","type":"uint256"}],"name":"decrypt","outputs":[{"name":"r","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"msg","type":"uint256"},{"name":"e","type":"uint256"},{"name":"m","type":"uint256"}],"name":"ecrypt","outputs":[{"name":"r","type":"uint256"}],"payable":false,"type":"function"}]).at("0x8e22ce204b494cf793fc531aa758ec69e04d0586");
      
      test.ecrypt.call(65, 17, 3233, (err, result) => {
        console.log(`
        err = ${JSON.stringify(err)}
        result = ${JSON.stringify(result)}
        `);
      });

      $scope.test = test;
      

    };

    $scope.pay = function(){
      $scope.test.func.sendTransaction(65, 17, 3233, (err, result) => {
        console.log(`
        err = ${JSON.stringify(err)}
        result = ${JSON.stringify(result)}
        `);
      });

    }
  }

})();	
