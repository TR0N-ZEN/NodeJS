const { Server } = require('socket.io');
const io = new Server({
    path: "/socket.io",
    serveClient: false,
    //below are Engine.io options
    pingTimeout: 5000,
    pingInterval: 10000,
    transports: ["websocket"],
    cookie: true
});


const IPaddress = 'localhost';
const port = 80;
io.listen()

io.of
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

httpserver.listen(port, IPaddress, function () {
    console.log(`Server is listening on ${IPaddress}:${port.toString()}`);
});