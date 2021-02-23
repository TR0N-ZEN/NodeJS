const child_process = require('child_process');
const inter_process_line = require('readline');

const dir = child_process.spawn("dir", []);
    dir.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    dir.stderr.on('data', (data) => {
        console.error(`child dir: ${data}`);
    });
    dir.on('close', (code) => {
        console.log(`child process 'dir' terminates`);
    });
    //const counter = require('-/count_100.js'); how does impoting work again???

const count_doku = child_process.spawn('node', [`${process.cwd()}/count_10.js`], {shell: true});
    count_doku.stdout.on("data", (data) => {
        console.log(`child count_doku: ${data}`);
    });

let childProcess = child_process = spawn('node', [`${process.cwd()}/childProcess.js`], {shell: true});
    childProcess.on("message", (message, sendHandle) => {
        console.log(`Child: ${message}`);
    });
setTimeout( () => {
    console.log("end");
}, 13000);