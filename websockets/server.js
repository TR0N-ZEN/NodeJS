const WebSocket = require("ws");

let options = {
    port: 3021
};
const wss = new WebSocket.Server(options);// 'wss' is the WebSocketServer
let clients = new Set();

wss.on("connection", ws => { //'ws' is the WebSocket instance
    console.log("New client connected");
    clients.add(ws);
    ws.on("message", message => {
        console.log(typeof(message));
        console.log(`${message}`);
        //if (typeof(message) !== "string") { throw "message isn't string" }
        for (client of clients) { client.send(message); }
        //<=>
        //clients.foreach((key, value, set) => {value.send(message);});
    });
    ws.on("close", () => {
        console.log("client disconnected");
    });
});