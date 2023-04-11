const http = require('http');
const display = require('./routes/route');

const server = http.createServer(display);

server.listen(3001);