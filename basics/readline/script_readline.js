const cluster = require("cluster");
const readline = require("readline");



var RCLI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

RCLI.on("line", (string) => {
    RCLI.write("Logged fron line: " + string);
});
RCLI.on("data", (string) => {
    RCLI.write("Logged fron data: " + string);
});
RCLI.on("close", () => {
    RCLI.write("Closed RCLI.");
});

RCLI.emit("line", "Hello there from emit line");
RCLI.emit("data", "Hello there from emit data");
setTimeout(() => {
    RCLI.close();
}, 20000);