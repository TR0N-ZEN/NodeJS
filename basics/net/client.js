// JavaScript source code
const net = require('net');
const readline = require('readline');
const { StringDecoder } = require('string_decoder');

//'readline' part
const defaultEncoding = 'utf8';
let ClientTextInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//'net' part
let socket_options = {
    //fd: <number>,
    allowHalfOpen: false// ,
    //readbale: <boolean>,
    //writable: <boolean>
};
let socket = net.Socket(socket_options);
//socket.setEncoding(defaultEncoding); //replaces the Buffer <-> String inbetween conversion
socket.on('data', (data) => {
    if (typeof(data) === "string")
    {
        // ClientTextInterface.write(`Host: ${data}\n`);
        console.log(`${data}`);
    }
    else
    {
        try
        {
            let decoder = new StringDecoder(defaultEncoding);
            let data_as_string = decoder.write(data);
            //ClientTextInterface.write(`Host: ${data_as_string}\n`);
            console.log(`${data_as_string}`);
            //throw `ERROR: Server send data of type ${typeof(data)}.`;
        }
        catch(error)
        {
            // ClientTextInterface.write(error);
            console.log(error);
        }
    }
    
}); //data from the host/server

//'readline' part again
ClientTextInterface.on('line', (line) => {
    readline.clearLine(ClientTextInterface.input),
    console.log(`Me: ${line}`);
    socket.write(line);
    // let buffer = Buffer.from(line, defaultEncoding)
    // socket.write(buffer);
});

//'net' again
let socket_connect_options = {
    //for TCP connections
    port: 3021,
    host: "localhost",
    //localAddress: <string>,
    //localPort: <number>,
    family: 4//,
    //hints: <number>,
    //lookup: <function>
    //for IPC connetctions
    //path: <string>
    //for both -> read "https://nodejs.org/dist/latest-v14.x/docs/api/net.html#net_socket_connect_options_connectlistener"
};
let socket_connect_Callback = (connect_message) => {
    // ClientTextInterface.write(`Connected to remote host.\nHost sends message: ${connect_message}`);
    console.log(`Connected to remote host.\nHost sends message: ${connect_message}`);
}
socket.connect(socket_connect_options, socket_connect_Callback);