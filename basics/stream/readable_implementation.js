//https://nodejs.org/dist/latest-v14.x/docs/api/stream.html

const stream = require("stream");
//for writable streams
const highwatermark = 16384; //actually default but documentation said when implementing better be explicit
const decodeStrings = true;
const defaultEncoding = "utf8";
const objectMode = false;
const emitClose = true;
const options = {
    highwatermark: highwatermark,
    decodeStrings: decodeStrings,
    defaultEncoding: defaultEncoding,
    objectMode: objectMode,
    emitClose: emitClose
};

const readline = require("readline");

const process = require("process");
const { StringDecoder } = require("string_decoder");

class myReadable extends stream.Readable {
    constructor(options) {
        super(options);
        this._index = 0;
        this._max = 10;
    }
    _read() {
        let i = this._index++;
        if (i < this._max) {
            const str = String(i);
            console.log(str);
            //const buf = Buffer.from(str, defaultEncoding);
            //this.push(buf);// triggers instances "line" event;
        }
    }
}

let myReadable_instance1 = new myReadable();
var RCLI = readline.createInterface({
    input: myReadable_instance1, //now push(buf) in class myReadable triggers "line" event on  it
    output: process.stdout
});

RCLI.write("RCLI up"); //writes to RCLI.output
RCLI.on("line", (chunk) => { //"line" event is received when readlineInterface.input stream receives an end of the line character (so for example when the userpresses enter or return in TTY (terminal))
    //console.log(`Received: ${chunk}`);
    RCLI.write(chunk);
});

myReadable_instance1.read();//pushs something in the readable stream -> see definition of _read() in class myReadable

setTimeout(() => {
    RCLI.close();
    console.log("End");
}, 5000);