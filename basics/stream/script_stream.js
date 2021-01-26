const stream = require("stream");
const readline = require("readline");

let duplex_stream1 = stream.Duplex();

//let writeable_stream1 = new stream.Writable();
//writeable_stream1.setEncoding("utf-8");
//writeable_stream1.on("data");
//let readable_stream1 = new stream.Readable();



duplex_stream1.on('data', (chunk) => {
    console.log(chunk);
});


let text = "Moinsen";

var RCLI = readline.createInterface(
    {
        input: process.stdin,
        output: duplex_stream1
    }
)
//duplex_stream1.write(text, "UTF8");