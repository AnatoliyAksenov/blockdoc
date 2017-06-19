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
  
  
  Create.$inject = ['$scope', 'dataAssistant'];

  function Create($scope, dataAssistant){
    $scope.file = {};
    $scope.init = function(){
      
    };

    $scope.onAddressUpdate = function(ethAddr) {
            $scope.ethAddrrIsValid = isAddress($scope.ethAddrr);
            console.log('>>> address is ' + $scope.ethAddrrIsValid ? "valid" : "invalid", $scope.ethAddrr);

            // remove style
            $element.find("#ethAddressFormGroup").removeClass(".has-success");
            $element.find("#ethAddressFormGroup").removeClass(".has-error");
            $element.find("#addressIsValidIcon").hide();
            $element.find("#addressErrorIcon").hide();

            if (!$scope.ethAddrrIsValid) return;

            $element.find("#checkingAddress").show();
            //TODO написать функцию проверки переменной $scope.ethAddrr в сервисе https://sing.me
            checkAddressInSignMe($scope.ethAddrr, function(isOk) {
              $element.find("#checkingAddress").hide();
              if (isOk) {
                  setAddressValid();
              } else {
                  setAddressError();
              }
            });

            function isAddress(address) {
                if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
                    // check if it has the basic requirements of an address
                    return false;
                } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
                    // If it's all small caps or all all caps, return true
                    return true;
                } /* else {
                    // Otherwise check each case
                    return isChecksumAddress(address);
                } */
            }

            function setAddressValid() {
              $element.find("#ethAddressFormGroup").addClass(".has-success");
              $element.find("#addressIsValidIcon").show();
            }

            function setAddressError() {
                $element.find("#ethAddressFormGroup").removeClass(".has-error");
                $element.find("#addressErrorIcon").show();
            }
    };
    
    $scope.check_account = function(){
      if($scope.$parent.contracts.agreement.contract){
        let agreement = $scope.$parent.contracts.agreement.contract;
        agreement.get.call((err, data) => {
          console.log(data);
        });
      }
    };

    $scope.create = function(){
      dataAssistant.post('https://sandbox.sign.me/signapi/sjson', JSON.stringify({
        "filet": $scope.file.data, 
        "fname": $scope.file.filename, 
        "key":"OLX5VFIO7VA0EUIO", 
        "user_ph":"+74990000105",
        "url": 'http://localhost:8080/test' //window.location.href
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
