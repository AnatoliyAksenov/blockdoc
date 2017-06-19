(function() {
    'use strict';

    angular
        .module('blockdocApp')
        .factory('_', lodash);

    lodash.$inject = ['$window'];

    function lodash($window) {
        return $window._;
    }

})();
