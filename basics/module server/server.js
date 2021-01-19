// JavaScript source code
const net = require('net');
const readline = require('readline');

const hostname = '127.0.0.1';
const port = 8081;
var server = net.Server();//http.server
server.on('listening', () => { console.log('Server: listening'); } );
server.on('connection', (socket) => {
    console.log('Server: connection established');
    socket.write('Host: connection established');
    socket.on('data', (data) => { console.log('Client: ' + data); socket.write('Client: ' + data); }); 
});
server.listen(port, hostname);

var TextInterface = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
