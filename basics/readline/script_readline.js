const cluster = require("cluster");
const readline = require("readline");



var RCLI = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

RCLI.emit("line", "Hello there from emit line");
RCLI.emit("pause");
RCLI.emit("resume");
RCLI.write("Moin\n");
RCLI.close();