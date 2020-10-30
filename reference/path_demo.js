// Core module
const path = require('path');

// File name
console.log(__filename); // ruta completa

// Base file name
console.log(path.basename(__filename)); // path_demo.js

// Directory
console.log(__dirname); // directory
console.log(path.dirname(__filename)); // directory

// File extension
console.log(path.extname(__filename)); // .js

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base); // path_demo.js

// Concatenate paths
// .../text/hello.html
console.log(path.join(__dirname, 'text', 'hello.html'));
// pone el delimitador correcto en cada OS (/, \)