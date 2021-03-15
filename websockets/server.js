const WebSocket = require("ws"); //the module "ws" (standing for WebSockets) is not part of node's standard repository so it has to be installed via the command 'npm install ws'

// Websockets 
let options = {
    port: 3021
};
const wss = new WebSocket.Server(options);// 'wss' is the WebSocketServer
let clients = new Set();

wss.on("connection", ws => { //'ws' is the WebSocket that is given to the callback function on a connection to the 'wss' - WebSocketServer
    console.log("New client connected");
    clients.add(ws);
		//establishing event listeners for the 'ws' - WebSocket
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