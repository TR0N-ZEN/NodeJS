// JavaScript source code
const net = require('net');
const readline = require('readline');

const port = 8081;
const hostname = '127.0.0.1';
const defaultEncoding = 'utf8';

var server_1 = net.createServer();//IPC or TCP serverr
server_1.on('listening', () => { console.log('Server: listening'); } );
server_1.on('connection', (socket) => {
    console.log('Server: connection established');
    socket.write('Host: connection established');
    //socket.setEncoding('utf8'); //replaces the Buffer <-> String inbetween conversion
    socket.on('data', (data) => { 
        console.log('Client: ' + data);
    }); 
});
server_1.listen(port, hostname);

var TextInterface = readline.createInterface({
    input: process.stdin,
    output: null
});
TextInterface.on('line', (line) => {
    let buffer = Buffer.from(line, defaultEncoding)
    socket.write(buffer);
});
//unfinished