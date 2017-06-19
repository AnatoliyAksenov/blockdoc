(function() {
    'use strict';

    angular
        .module('blockdocApp')
        .factory('socketUtils', socketUtils);

    socketUtils.$inject = [];

    function socketUtils() {
        var socket = io('/');
        return {
            socket: socket
        };

    }

})();