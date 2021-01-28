const readline = require("readline");

const RCLI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
RCLI.on("line", (string) => {
    RCLI.write(`Logged fron RCLI.on('line'): ${string}`);
});

let a = 10;

function delay(milliseconds) {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve();
        }, milliseconds);
    });
}

async function count() {
    for (let i = 0; i < a; i++) {
        await delay(1000);
        RCLI.write(i);
    }
}


count();