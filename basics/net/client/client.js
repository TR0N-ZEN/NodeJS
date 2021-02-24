// JavaScript source code
const net = require('net');
const readline = require('readline');
const { StringDecoder } = require('string_decoder');

//'readline' part
const defaultEncoding = 'utf8';
var ClientTextInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//'net' part
let socket_options = {
    //fd: <number>,
    allowHalfOpen: false,
    //readbale: <boolean>,
    //writable: <boolean>
};
let socket_connect_Callback = (connect_message) => {
    console.log(`Connected to remote host.\nHost sends message: ${connect_message}`);
}
var socket = net.Socket(socket_options, socket_connect_Callback);
//socket.setEncoding(defaultEncoding); //replaces the Buffer <-> String inbetween conversion
socket.on('data', (data) => {
    if (typeof(data) === "string") { console.log(`Host: ${data}`); }
    else
    {
        console.log(`ERROR: Server send data of type ${typeof(data)}.`);
        throw `ERROR: Server send data of type ${typeof(line)}.`;
    }
    // let decoder = new StringDecoder(defaultEncoding);
    // let data_as_string = decoder.write(data);
    // console.log(`Host: ${data_as_string}`);
}); //data from the host/server

//'readline' part again
ClientTextInterface.on('line', (line) => {
    socket.write(line);
    // let buffer = Buffer.from(line, defaultEncoding)
    // socket.write(buffer);
});