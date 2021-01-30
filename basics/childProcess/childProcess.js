const { spawn } = require('child_process');
//const count = require('./count_10.js');
/*
const ls = spawn('ls', ['-lh', '/home']);


ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
*/

const dir = spawn("dir", []);
dir.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

dir.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

dir.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
//const counter = require('-/count_100.js'); how does impoting work again???

const cound_doku = spawn('node', [`${process.cwd()}/count_10.js`]);

cound_doku.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

setTimeout( () => {
    console.log("end");
}, 13000);