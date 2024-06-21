// Create web server and listen on port 8080
// Send a response to the client

// Import the 'http' module
var http = require('http');

// Create a web server
var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello, World!\n');
});

// Start the web server
server.listen(8080);

console.log('Server running at http://