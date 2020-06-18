let http = require('http');
let url = require('url');
const { route } = require('./router');
function start(route) {
    function onRequest(request, response) {
        let pathName = url.parse(request.url).pathname;
        console.log("Request for " + pathName + " received.");
        route(pathName);
        response.writeHead(200, {"Context-Type": "text"});
        response.write("THIS IS ROUTER, I DO IT!");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;