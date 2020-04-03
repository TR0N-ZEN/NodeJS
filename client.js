// JavaScript source code
const net = require('net');

const host = '127.0.0.1';
const port = 8081;

function connectionEvent() { console.log('I am connected to my Buddy, his name is server.'); };


const socket = net.connect(port, host, connectionEvent);
socket.on('end', () => { console.log('Sorry mate I leave. Love you.'); });
