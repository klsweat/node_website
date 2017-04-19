var http = require('http');
var url = require('url');
var fs = require('fs');

var PORT = 7000;

function serverResponse (request, response){

    var urlParts = url.parse(request.url);
    switch (urlParts.pathname){
        case '/':
        case '/home':
            fs.readFile("index.html", function (err, data){
                response.end(data);
            });
            break;

        case '/portfolio':
            fs.readFile("food.html", function(err,data){
                response.end(data);
            });
            break;
        
        case '/movies':
            fs.readFile("movies.html", function(err,data){
                response.end(data);
            });
        default: 
            response.end('<h1>404 Not Found</h1>')
    }

}

var server = http.createServer(serverResponse);

server.listen(PORT, function(){
    console.log('Server has been started, listening on: http://localhost:' + PORT);
})