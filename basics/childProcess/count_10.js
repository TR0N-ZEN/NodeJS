const readline = require("readline");

const RCLI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

RCLI.on("line", (string) => {
    RCLI.write(string);
    console.log();
    //RCLI.write(`Logged fron RCLI.on('line'): ${string}`);
});

let a = 10;

function delay () {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve();
        }, 1000);
    });
}

async function count () {
    for (let i = 0; i < a; i++) {
        await delay(1000);
        RCLI.emit("line", `i = ${i}`);
        //RCLI.write(`i = ${i}`);
        //console.log();
        if (i == a-1) {
            RCLI.emit("line", `end of loop in async function`);
        };
    }
}

count();

setTimeout( () => {
    console.log('Timeout end');
}, 11000);

console.log("sync end");