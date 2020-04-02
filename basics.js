const http = require('http');
const fs = require('fs');
const url = require('url');
const events = require('events');

const hostname = '127.0.0.1';
const port = 8080;

const eventEmitter = new events.EventEmitter();

//Create a function
function ShootMotherfuckerShoot() {
    console.log('Shooting that Motherfucker');
}

//Assign a function to an event via 'eventEmitter.on('EVENTNAME', FUNCTIONNAME)'
eventEmitter.on('SHOOT', ShootMotherfuckerShoot);


var PartOne = "";
var PartTwo = "";
var PartThree = "";

//create a server and set the function triggered at the 'connection' event of http.Server
const HttpServer = http.createServer((req, res) => {
    var q = url.parse(req.url, true).query;
    switch (q.value1) {
        case 'Option1':
            //Fire the 'SHOOT' event:
            eventEmitter.emit('SHOOT');
            fs.readFile("OptionOne.html", function (err, data) {
                if (err) { console.log("error in middle file") }
                PartTwo = data;
            });
            break;
        case 'Option2':
            //Fire the 'SHOOT' event:
            eventEmitter.emit('SHOOT');
            fs.readFile("OptionTwo.html", function (err, data) {
                if (err) { console.log("error in middle file") }
                PartTwo = data;
            });
            break;
        default:
            console.log('You Idiot');
            fs.readFile("Default.html", function (err, data) {
                if (err) { console.log("error in middle file") }
                PartTwo = data;
            });
    }
    fs.readFile("Top.html", function (err, data) { //reading a file with the function 'readFile' from the 'fs' object will create a callback function, which is the second argument passed to the 'readFile' function which reads the file in parallel to the ongoing commands following this line
        if (err) { console.log("error in top file") }
        PartOne = data;
    });
    PartThree = fs.readFileSync("Bottom.html"); //reading a file with the function 'readFileSync' of the 'fs' Object will block the further execution of the program

    htmlcode = PartOne + PartTwo + PartThree;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(htmlcode);
    res.end();
}).listen(port, hostname, () => { console.log('Server running at http://' + hostname + ':' + port.toString()); }); //the appendix '.listen(port, hostname, () => {...} );' is equivalent to 'http.Server.listen(port, hostname, () => {...} );' because the stuff before the appendix returns 'http.Server'