// JavaScript source code
const net = require('net');
const readline = require('readline');
const { StringDecoder } = require('string_decoder');

const port = 8081;
const host = '127.0.0.1';
const defaultEncoding = 'utf8';

var socket = net.createConnection(port, host, (connect_message) => {
    console.log(`Connected to remote host.\nHost sends message: ${connect_message}`);
});
    //socket.setEncoding(defaultEncoding); //replaces the Buffer <-> String inbetween conversion
    socket.on('data', (data) => {
        let decoder = new StringDecoder(defaultEncoding);
        let data_as_string = decoder.write(data);
        console.log(`Host: ${data_as_string}`);
    }); //data from the host/server

var TextInterface = readline.createInterface({
    input: process.stdin,
    output: null
});
    TextInterface.on('line', (line) => {
        let buffer = Buffer.from(line, defaultEncoding)
        socket.write(buffer);   
    });