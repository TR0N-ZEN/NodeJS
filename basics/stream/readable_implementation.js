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
            const buf = Buffer.from(str, defaultEncoding);
            this.push(buf);// triggers instances "data" event;
        }
    }
}

let myReadable_instance1 = new myReadable();
var RCLI = readline.createInterface({
    input: myReadable_instance1, //now push(buf) in class myReadable triggers this too
    output: process.stdout
});
//console.log(RCLI);
RCLI.write("RCLI up\n");
/*
RCLI.on("data", (line) => {
    //RCLI.write(line, defaultEncoding);
    RCLI.output.write(line, defaultEncoding);
    readline.moveCursor(RCLI.output, 0, 1);//relative to position before so readline.moveCursor(dx[, dy, ...]);
    readline.cursorTo(RCLI.output, 0);//absolute position so readline.cursorTo(x[, y, ...]);
});*/
//RCLI.write("RCLI ready\n");
myReadable_instance1.on("data", (chunk) => {
    //console.log("myReadable_instance1.on('data'): ${chunk});
    //RCLI.emit("line", chunk);
});


//myReadable_instance1.push("myReadable_instance1.push()");
myReadable_instance1.read();

setTimeout(() => {
    console.log("End");
},200000);