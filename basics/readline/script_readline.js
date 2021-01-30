const { on } = require("process");
const readline = require("readline");

function delay () {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve();
            console.log("\ndelay end");
        }, 5000);
    });
}

var RCLI = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> Hoy, the fuck are you doing?\n"
});//
//RCLI.setPrompt("Hoy, the fuck are you doing?");
RCLI.on("line", async (string) => {
    await delay();
    //RCLI.write(`on('line'): ${string}`);
    //RCLI.prompt();
    let query = "What the heck do you want?";
    RCLI.question(query, (answer) => {
        RCLI.write(answer);
    });
});
RCLI.on("close", () => {
    RCLI.write("Closed RCLI.");
});


RCLI.emit("line", "coded event emit 'line'");
setTimeout( () => {
    RCLI.close();
}, 20000);