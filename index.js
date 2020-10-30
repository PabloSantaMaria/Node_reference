const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }

    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'),
        (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }

    if (req.url === '/api/movies') {
        const movies = [
            {title: 'Movie 1', year: 2001},
            {title: 'Movie 2', year: 2020}
        ];

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(movies));
    }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));