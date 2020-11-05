const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //     fs.readFile(path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //         if(err) throw err;
  //         res.writeHead(200, {'Content-Type': 'text/html'});
  //         res.end(content);
  //     });
  // }
  
  // if (req.url === '/about') {
  //     fs.readFile(path.join(__dirname, 'public', 'about.html'),
  //     (err, content) => {
  //         if(err) throw err;
  //         res.writeHead(200, {'Content-Type': 'text/html'});
  //         res.end(content);
  //     });
  // }
  
  // if (req.url === '/api/movies') {
  //     const movies = [
  //         {title: 'Movie 1', year: 2001},
  //         {title: 'Movie 2', year: 2020}
  //     ];
  
  //     res.writeHead(200, {'Content-Type': 'application/json'});
  //     res.end(JSON.stringify(movies));
  // }
  
  // Build file path dinamically
  let filePath = path.join(
    __dirname, 
    'public', 
    req.url === '/' ? 'index.html' : req.url
    );
    
    // Get file extension
    let fileExt = path.extname(filePath);
    
    // Set content type
    let contentType = 'text/html';
    switch (fileExt) {
      case '.js':
      contentType = 'text/javascript';
      break;
      case '.css':
      contentType = 'text/css';
      break;
      case '.json':
      contentType = 'application/json';
      break;
      case '.png':
      contentType = 'image/png';
      case '.jpg':
      contentType = 'image/jpg';
      break;
      default:
      break;
    }
    
    // Read file
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          // Page not found
          fs.readFile(path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content, 'utf8');
          })
        }
        else {
          // Some server error
          res.writeHead(500);
          res.end(`Server error: ${err.code}`);
        }
      }
      else {
        // Success
        res.writeHead(200, {'Content-Type': contentType});
        res.end(content, 'utf8');
      }

    })
  });
  
  server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));