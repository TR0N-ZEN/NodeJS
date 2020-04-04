// JavaScript source code
const net = require('net');
const readline = require('readline');

const host = '127.0.0.1';
const port = 8081;

var socket = net.connect(port, host);
socket.setEncoding('utf8');
socket.on('data', (data) => { console.log(data); }); //data from the host/server

var TextInterface = readline.createInterface(
    {
        input: process.stdin,
        output: null
    }
);

//socket.write('Hello U.');

TextInterface.on('line', (line) => {
    socket.write(line);
    }
);