const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method);

});

server.listen(3000, 'localhost', () => {
  console.log('server listening on port 3000');
});