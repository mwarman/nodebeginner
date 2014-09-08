function route(handle, pathname, request, response) {
  console.log("About to route a request for %s", pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](request, response);
  } else {
    console.log("No request handler found for %s", pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found");
    response.end();
  }
}

exports.route = route;
