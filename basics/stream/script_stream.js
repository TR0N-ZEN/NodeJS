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


class myWritable extends stream.Writable {
    constructor(options) {
        super(options);
        this._decoder = new StringDecoder(options && options.defaultEncoding);
        this.data = "";
    }
    _write(chunk, encoding, callback) {
        if (encoding === "buffer") {
            chunk = this._decoder.write(chunk);
        }
        this.data += chunk + "\n";
        console.log(chunk);
        callback();
    } 
    _writev(chunk, encoding, callback) {
        if (encoding === "buffer") { 
            chunk = this._decoder.write(chunk);
        }
        this.data += chunk + "\n";
        callback();
    }
    _final(callback) {
        this.data += this._decoder.end();
        callback();
    }
}

let myWritable_instance1 = new myWritable(options);
console.log(myWritable_instance1);


function loggo() {
    console.log("loggo()");
}


myWritable_instance1.on("data", (data) => {
    myWritable_instance1.write("myWritable_instance1.on('data'): " + data, defaultEncoding, loggo);
});
myWritable_instance1.on("line", (line) => {
    myWritable_instance1.write("myWritable_instance.on('line'): " + line, defaultEncoding, loggo);
});
console.log(myWritable_instance1);
myWritable_instance1.emit("data", "myWritable_instace1.emit('data')");
myWritable_instance1.emit("line", "myWritable_instace1.emit('line')");


myWritable_instance1.write("myWritable_instance1.write()", defaultEncoding, loggo);


var RCLI = readline.createInterface({
    input: process.stdin,
    output: myWritable_instance1
});
RCLI.on("line", (line) => {
    RCLI.output.write("RCLI.on('line')" + line, defaultEncoding, loggo);
});
RCLI.on("close", () => {
    RCLI.output.write("RCLI.on('close')");
});

RCLI.output.write("RCLI.output.write()");
setTimeout(() => {
    console.log(myWritable_instance1.data);
    RCLI.close();
}, 20000);
/*
let readable_stream1 = new stream.Readable();
var RCLI_1 = readline.createInterface(
    {
        input: readable_stream1,
        output: process.stdout
    }
);
RCLI_1.on("line", (string) => {
    RCLI_1.write(string, encoding);
});
readable_stream1.on("data", (chunk) => {
    RCLI_1.emit("line", chunk);
});

readable_stream1.push("hello from readable_stream1");





//let writeable_stream1 = new stream.Writable();
//writeable_stream1.setEncoding("utf-8");
//writeable_stream1.on("data");

/*
//let duplex_stream1 = stream.Duplex();
duplex_stream1.on("data", (chunk) => {
    console.log(chunk);
});


var RCLI_2 = readline.createInterface(
    {
        input: process.stdin,
        output: duplex_stream1
    }
)
RCLI_2.on("data", (string) => {
    RCLI_2.write(string);
});

let text = "Moinsen";
duplex_stream1.write(text, "UTF8");

*/