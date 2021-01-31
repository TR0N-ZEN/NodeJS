const { on } = require("process");
const readline = require("readline");

function delay () {
    return new Promise( (resolve) => {
        setTimeout( () => {
            console.log("delay end");
            resolve();
        }, 2000);
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
    console.log(string);
    //RCLI.write(`on('line'): ${string}`);
    //RCLI.prompt();
    let query = "What the heck do you want?\n";
    RCLI.question(query, (answer) => {
        console.log(answer);
    });
});
RCLI.on("close", () => {
    //console.log(Closing RCLI);
    RCLI.write("Closing RCLI.");
});

RCLI.write("Hey can I ask u something?\n");

setTimeout( () => {
    RCLI.close();
}, 10000);