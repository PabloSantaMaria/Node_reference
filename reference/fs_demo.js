// Core module
// File System
const fs = require('fs');
const path = require('path');
const workingDirectory = path.join(__dirname, 'test');

// Los metodos son asincronicos!!

// Create folder
fs.mkdir(workingDirectory, {}, err => {
    if (err) throw err;
    console.log(`Folder created`);
});

// Create and write to a file
fs.writeFile(path.join(workingDirectory, 'test.txt'), 'Hello World!', err => {
    if (err) throw err;
    console.log('File created');
});

// Append to a file
fs.appendFile(path.join(workingDirectory, 'test.txt'), ' I love Node.js!', err => {
    if (err) throw err;
    console.log('File appended');
});

// Read file
fs.readFile(path.join(workingDirectory, 'test.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Rename a file
fs.rename(path.join(workingDirectory, 'test.txt'), path.join(workingDirectory, 'helloWorld.txt'), err => {
    if (err) throw err;
    console.log('File renamed');
});