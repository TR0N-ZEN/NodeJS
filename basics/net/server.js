// JavaScript source code
const { Server } = require('http');
const net = require('net');
const readline = require('readline');

//'readline' part
const defaultEncoding = 'utf8';
let ServerTextInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//'net' part
let server_options = {
    allowHalfOpen: false,
    pauseOnConnect: false
};
var sockets = new Set();
let server_connection_Callback = function(socket) {
    console.log("New connection made to this server.");
    sockets.add(socket);
    socket.setEncoding('utf8'); //replaces the Buffer <-> String inbetween conversion
    socket.write('Host: connection established');
    socket.on('data', (data) => {
        if (typeof(data) === "string")
        {
            //ServerTextInterface.write(`Client: ${data}\n`);
            console.log(`Client: ${data}`);
        }
        else
        {
            try 
            {
                let decoder = new StringDecoder(defaultEncoding);
                let data_as_string = decoder.write(data);
                //ServerTextInterface.write(`Client: ${data_as_string}\n`);
                console.log(`Client: ${data_as_string}`);
                //throw `ERROR: Client send data of type ${typeof(line)}.`;
            }
            catch(error)
            {
                // ServerTextInterface.write(error);
                console.log(error);
            }
        }
    });
};
let server_1 = net.Server(server_options, server_connection_Callback); 
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
        for (let socket of sockets)
        {
            socket.write(line);//sending data as a string
        }
    }
    else
    {
        try
        {
            let buffer = Buffer.from(line, defaultEncoding);
            socket.write(buffer);//sending data as a buffer
            //throw `ERROR: ServerTextInterface was feed with data of type ${typeof(line)}.`;
        }
        catch(error)
        {
            // ServerTextInterface.write(error);
            console.log(error);
        }
    }
});

//'net' again
let server_listen_options = {
    port: 3021, //IPC or TCP server is to be decided depending on what it listens to: a file (-> IPC) or a port (-> TCP)
    host: "localhost"//,
    //path: xxx,
    //backlog: xxx,
    //exclusive: <boolean>,
    //readableAll: <boolean>,
    //writableAll: <boolean>,
    //ipv6Only: <boolean>
};
let server_listen_Callback = function() {
    // ServerTextInterface.write(`Server is listening on ${server_listen_options.host} : ${server_listen_options.port}.`);
    console.log(`Server is listening on ${server_listen_options.host} : ${server_listen_options.port}.`);
};
server_1.listen(server_listen_options, server_listen_Callback);