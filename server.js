var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for %s received.", pathname);
    route(handle, pathname, request, response);
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Server started.");
}

exports.start = start;
