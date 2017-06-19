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
      controller: Create,
      link: Link
    };

    return directive;
  };
  
  
  Create.$inject = ['$scope', 'dataAssistant', '$window'];

  function Create($scope, dataAssistant, $window){
    $scope.file = {};
    $scope.check_result = false;

    $scope.init = function(){
      
    };

    $scope.onAddressUpdate = function() {
         
    };
    
    $scope.check_account = function(){
      console.log('check_account');
      if($scope.$parent.contracts.agreement.contract){
        let agreement = $scope.$parent.contracts.agreement.contract;
       
        agreement.get.call((err, data) => {
          let main_agreement = $scope.$parent.main_agreement;
          let sha256 = $window.CryptoJS.SHA256(main_agreement).toString();
          console.log(sha256);

          if(data == sha256){
            const text = main_agreement + $scope.ethAddrr;
            console.log(text);
            dataAssistant.post('https://sandbox.sign.me/signaturecheck/json',JSON.stringify({
              'filet': btoa(text),
              'md5': $window.CryptoJS.MD5(main_agreement+$scope.ethAddrr).toString()
            }))
            .then( (data) => {
              console.log(JSON.stringify(data));
              if(data.statusText == 'OK'){
                $scope.check_result = true;
                $scope.$digest();
              }
            });
          };
        });
      } else {
        console.log('Error checking');
      }
    };

    $scope.create = function(){
      dataAssistant.post('https://sandbox.sign.me/signapi/sjson', JSON.stringify({
        "filet": $scope.file.data, 
        "fname": $scope.file.filename, 
        "key":"OLX5VFIO7VA0EUIO", 
        "user_ph":"+74990000105",
        "url": 'http://localhost:8080/confirm' //window.location.href
      }))
      .then( (data) => {
        if ( data.data !== undefined ){
          console.log(data.data);
          window.location.assign('https://sandbox.sign.me/signapi/sjson/'+ data.data);
        } else {
          alert(`Can't create file signature.`);
        }
      });
    }

    $scope.assign_agreement = function(){
      const text = $scope.$parent.main_agreement + $window.web3.eth.accounts[0];
      console.log($scope.$parent.main_agreement + $window.web3.eth.accounts[0]);
      dataAssistant.post('https://sandbox.sign.me/signapi/sjson', JSON.stringify({
        "filet": btoa(text), 
        "fname": 'selfsign.txt', 
        "key":"OLX5VFIO7VA0EUIO", 
        "user_ph":"+74990000105",
        "url": 'http://localhost:8080/confirm' //window.location.href
      }))
      .then( (data) => {
        if ( data.data !== undefined ){
          console.log(data.data);
          window.location.assign('https://sandbox.sign.me/signapi/sjson/'+ data.data);
        } else {
          alert(`Can't create file signature.`);
        }
      });
    }
  }

  Link.$inject = ['$scope', '$element'];

  function Link($scope, $element){

    $element.find('#create_file').change((e) => {
      
      
      $scope.file.filename = e.target.files[0].name;
      console.log($scope.file.filename);

      var reader = new FileReader();

      reader.onload = function(e){
        const f = btoa(e.target.result);
        console.log(f.substr(0, 100));
        $scope.file.data = f;

      };

      reader.readAsDataURL(e.target.files[0]);
    });
    
    $element.find('#test').on('show.bs.modal', function(e){

      $scope.$digest();
    });
  }

})();	
