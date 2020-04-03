// JavaScript source code
const net = require('net');
const events = require('events');

const hostname = '127.0.0.1';
const port = 8081;

const server = new net.Server();


server.on('listening', () => { var x = server.address(); console.log('Waiting or in fancy words: Server listening '); });
server.on('connection', () => { console.log('Moin Buddy your Connection is established'); });
server.on('close', () => { console.log('Bye Buddy I am closing') });

server.listen(port, hostname);


//server.close(); 