const http = require('http');
const handles = require('./handles')
const port = 3000;

const server = http.createServer(handles.serverHandle);

server.listen(8080);
