'use strict';

const http = require('http');
const express = require('express');
const app = express();




app.use('/', express.static('public/app'));


let port = 8080;
let server = http.createServer(app);
server.listen(port, function(){
	console.log('HTTP server listening on port ' + port );
});

