//const IPaddress = 'localhost';
const port = 3021;

// const io = require("socket.io")();
// // or
// const { Server } = require("socket.io");
// const io = new Server();
let options = {
    path: "/socket.io",
    serveClient: false,
    connectTimeout:	45000,
    //below are Engine.io options
    pingTimeout: 5000,
    pingInterval: 10000,
    transports: ["websocket"],
    allowUpgrades: false,
    wsEngine: "ws",
    cookie: true
}
var io = require('socket.io')(port, options); //'options' accessible under 'io.opts'
/*
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('ClientMessage', function (message) {
        console.log(`client: ${message}`);
        io.emit('ServerMessage', message);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
*/