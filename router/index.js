let route = require("./router");
let server = require("./server");

server.start(route.route);