const cluster = require("cluster");
const readline = require("readline");



var RCLI = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)


(async () => {
    RCLI.emit("line", "Hello there from emit line");
    RCLI.emit("pause");
    await new Promise(resolve => {
        RCLI.emit("resume");
    });
    RCLI.close();
})();