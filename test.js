//Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

//create HTTP server
const server = http.createServer(function (req, res) {
    //set response HTTP header with HTTP status and Content type
    res.writeHead(200, { "Content-Type": "text/plain" });

    //Send the response body "Hello World"
    res.end("Hello World");
});

//Prints a logg once the server starts listening
server.listen(port, hostname, function() {
    console.log(`the server is currently running on http://${hostname}:${port}`);
})