const WebSocket = require("ws");

let options = {
    port: 3021
};
const wss = new WebSocket.Server(options);// 'wss' is the WebSocketServer

wss.on("connection", ws => { //'ws' is the WebSocket instance
    console.log("New client connected");
    // ws.on("data", data => {
        
    // });
    ws.on("close", () => {
        console.log("client disconnected");
    });
});