const readline = require("readline");

var RCLI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

RCLI.on("line", (string) => {
    RCLI.write(`Logged from line: ${string}`);
});
/*
RCLI.on("data", (string) => {
    RCLI.write(`Logged from data: ${string}`);
});
*/
RCLI.on("close", () => {
    RCLI.write("Closed RCLI.");
});

//RCLI.emit("line", "Hello there from emit line");
//RCLI.emit("data", "Hello there from emit data");
console.log("Meow");
process.stdin.push("MEOW", "utf8");
process.stdin.read();
setTimeout(() => {
    RCLI.close();
}, 20000);