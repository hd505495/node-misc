let http = require('http');

http.createServer((request, result) => {
  result.writeHead(200, {'Content-Type': 'text/html'});
  result.write(request.url);
  result.end('Hello World!');
}).listen(8080);