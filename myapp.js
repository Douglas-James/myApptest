const http = require('http');
// const colors = require('colors')
const display = require('./routes/route');

const server = http.createServer(display);

server.listen(3002);

// console.log('inverse the color'.inverse);
// console.log("hello".blue)