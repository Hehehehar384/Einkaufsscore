const http = require('http');
const fs = require('fs');

let scores = {
  Jonas: 0,
  Peter: 0,
  mama: 0,
  papa: 0
};

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else if (req.url === '/script.js') {
    fs.readFile('./script.js', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/javascript'});
        res.end('Error loading script.js');
      } else {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.end(data);
      }
    });
  } else if (req.url === '/scores') {
    if (req.method === 'GET') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(scores));
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        let newScores = JSON.parse(body);
        scores = newScores;
        fs.writeFile('./scores.json', JSON.stringify(scores), err => {
          if (err) {
            console.log('Error writing scores to file:', err);
          }
        });
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(scores));
      });
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
});

const PORT = process.env.PORT || 3000;

fs.readFile('./scores.json', (err, data) => {
  if (!err) {
    scores = JSON.parse(data);
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


