var http = require('http');
var app = require('./app');
var PORT = process.env.PORT || 8000;

http.createServer(app.handleRequests).listen(PORT);