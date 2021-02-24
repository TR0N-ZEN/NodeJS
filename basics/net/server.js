// JavaScript source code
const net = require('net');
const readline = require('readline');

//'readline' part
const defaultEncoding = 'utf8';
var ServerTextInterface = readline.createInterface({
    input: process.stdin,
    output: process.stout
});
//'net' part
let server_options = {
    allowHalfOpen: false,
    pauseOnConnect: false
};
var connections = new Set();
let server_connectionCallback = function(socket) {
    console.log("New connection made to this server.");
    connections.add(socket);
    socket.write('Host: connection established');
    socket.on('data', (data) => {
        if (typeof(data) !== "string") { console.log(`ERROR: Client send data of type ${typeof(data)}.`); }
        else
        {
            //console.log(`Client: ${data}`);
            ServerTextInterface.output.write(`Client: ${data}`);
        }
    });
};
var server_1 = net.Server(server_options, server_connectionCallback); 
// server_1.on('listening', () => { console.log('Server: listening'); } );
// server_1.on('connection', (socket) => {
//     console.log("New connection made to this server.");
//     socket.write('Host: connection established');
//     //socket.setEncoding('utf8'); //replaces the Buffer <-> String inbetween conversion
//     socket.on('data', (data) => { 
//         console.log('Client: ' + data);
//     }); 
// });

//some 'readline' again
ServerTextInterface.on('line', (line) => {
    if (typeof(line) === "string")
    {
        for (socket in connections)
        {
            socket.write(line);//sending data as a string
            //let buffer = Buffer.from(line, defaultEncoding)
            //socket.write(buffer);
        }
    }
    else
    { 
        console.log(`ERROR: ServerTextInterface was feed with data of type ${typeof(line)}.`);
        throw `ERROR: ServerTextInterface was feed with data of type ${typeof(line)}.`;
    };
});

//'net' again
let server_listen_options = {
    port: 3021, //IPC or TCP server is to be decided depending on what it listens to: a file (-> IPC) or a port (-> TCP)
    host: "localhost",
    //path: xxx,
    //backlog: xxx,
    //exclusive: <boolean>,
    //readableAll: <boolean>,
    //writableAll: <boolean>,
    //ipv6Only: <boolean>
};
let server_listenCallback = function() {
    console.log(`Server is listening on ${server_listen_options.host} : ${server_listen_options.port}.`);
};
server_1.listen(server_listen_options, server_listenCallback);