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
    $scope.init = function(){
      
    }
  }

  Link.$inject = ['$scope', '$element'];

  function Link($scope, $element){

    $element.find('#create_file').change((e) => {
      
      console.log(e.target.files);
      var reader = new FileReader();
      reader.onload = function(e){
        console.log(btoa(e.target.result));
      };

      reader.readAsDataURL(e.target.files[0]);
    });
    
    $element.find('#test').on('show.bs.modal', function(e){

      $scope.$digest();
    });
  }

})();	
