// create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

// create server
http.createServer(function(request, response) {
    // parse url
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');

    // read file
    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        response.end();;
    });
}).listen(8080);
