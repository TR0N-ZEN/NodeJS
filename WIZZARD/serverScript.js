// JavaScript source code


//Cards Generator----------------------------------------------------------
function card(color, value) {
    this.name = name;
    this.value = value;
}
var cards = [];
var cardIndex = 0;
var colors = ["red", "green", "blue", "yellow"]

for (color of colors) {
    for (x = 1; x < 14; x++) {
        cards[cardIndex] = new card(color, x);
        cardIndex++;
    }
}
for (x = 1; x < 5; x++) {
    cards[cardIndex] = new card(undefined, 14);
    cardIndex++;
}
for (x = 1; x < 5; x++) {
    cards[cardIndex] = new card(undefined, 0);
    cardIndex++;
}
//END Card Generator-------------------------------------------------------

//Player Generator---------------------------------------------------------
var ID = 0;
var playerList = [];
function Player(name) {
    this.name = name;
    this.id = ID;
    this.points = 0;
    this.guesses = 0;
    this.cards = [];
    ID++;
}
//END Cards Generator------------------------------------------------------

//Server Setup-------------------------------------------------------------
const express = require('express');
const app = express();
const httpsserver = require('http').Server(app);
var io = require('socket.io')(httpsserver);

const IPaddress = '192.168.178.95';
const port = 80;

io.on('connection', function (socket) { //parameter of the callbackfunction here called 'socket' is the connection to the client that connected 
    console.log('a user connected');
    //console.log(io);

    socket.on('toConsole', function (text) { console.log(text); });
    socket.on('Login', function (name) {
        playerList.push(new Player(name));
        console.log("New Player " + playerList[ID - 1].name + " arrived.");
        socket.emit('PlayerObject', JSON.stringify(playerList[ID - 1]));
        io.emit('ServerMessage', playerList[ID - 1].name + " arrived.");
    });
    socket.on('ClientMessage', function (message) {    //Messages from Client
        console.log(message);
        io.emit('ServerMessage',message);
    });
    socket.on('disconnect', function () { console.log('user disconnected'); });
});           

app.use(express.static('client'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/game.html');
});

httpsserver.listen(port, IPaddress, function () {
    console.log( 'Server is listening on ' + IPaddress + ':' + port.toString() );
});
//END Server Setup---------------------------------------------------------

//Schuffle Cards-----------------------------------------------------------
function shuffle() {
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = cards[i]
        cards[i] = cards[j]
        cards[j] = k
    }
    console.log(cards);
}
//END Schuffle Cards-------------------------------------------------------