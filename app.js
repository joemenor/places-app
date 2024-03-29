const http = require('http');
var fs = require('fs');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

server.listen(port,() => {
  console.log(`Server running at port `+port)
  console.log('index file included');
});
