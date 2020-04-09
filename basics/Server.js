// JavaScript source code
const net = require('net');
const readline = require('readline');

const hostname = '127.0.0.1';
const port = 8081;
var server = new net.Server();
server.on('listening', () => { console.log('Server: listening'); } );
server.on('connection', (e) => {
    console.log('Server: connection established');
    e.write('Host: connection established');
    e.on('data', (data) => { console.log('Client: ' + data); e.write('Client: ' + data); }); 
});
server.listen(port, hostname);

var TextInterface = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
