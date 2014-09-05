var querystring = require("querystring"),
    fs = require("fs");

function start(response) {
  console.log("Request handler 'start' was called.");

  var markup = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF=8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit" />' +
    '</form>' +
    '</body>' +
    '</html>';
  
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(markup);
  response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent: " + querystring.parse(postData).text);
  response.end();
}

function show(response) {
  console.log("Request handler 'show' was called.");
  response.writeHead(200, {"Content-Type": "image/png"});
  fs.createReadStream("tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
