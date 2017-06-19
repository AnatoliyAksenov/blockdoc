(function () {

    'use strict';
    angular.module('blockdocApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', 'FileReader'];
    function MainCtrl($scope, FileReader) {
        var mainCtrl = this;
        console.log('MainCtrl called');

        mainCtrl.docfile = "";
        mainCtrl.selectedParty = ""
        mainCtrl.counterparts = [];
        mainCtrl.docContent = "";

        mainCtrl.header = "Welcome to BlockSign";
        mainCtrl.onFileSelected = function(element) {
            mainCtrl.docfile = element.files[0];
            var fileReader = FileReader.readAsText(mainCtrl.docfile, $scope)
                .then(function(result) {
                    mainCtrl.docContent = result;
                    console.log('file content: ', mainCtrl.docContent);
                });
        };

        mainCtrl.onCounterpartsSelected = function(party) {
            mainCtrl.counterparts.push(mainCtrl.selectedParty);
            console.log('counterparties selected', party);
        };

        mainCtrl.chain = function() {
            console.log('CHAIN clicked');
        };

        mainCtrl.sign = function() {
            console.log('SIGN clicked');
        };

        mainCtrl.verify = function() {
            console.log('VERIFY clicked');
        };

        mainCtrl.parties = [
            {name: 'ABC Bank Inc.', address: '0x11111'},
            {name: 'BAC Holding Inc.', address: '0x2222'},
            {name: 'CBA Trading Lpc.', address: '0x3333'},
        ]

    }

}());
