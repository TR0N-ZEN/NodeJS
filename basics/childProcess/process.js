const child_process = require('child_process');
const inter_process_line = require('readline');

const dir = child_process.spawn("dir", []);
    dir.stdout.on('data', (data) => {
        console.log(`child dir: ${data}`);
    });
    dir.stderr.on('data', (data) => {
        console.error(`child dir (err): ${data}`);
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
    childProcess.on("message", (message, sendHandle) => { //message event is triggered if childProcess runs 'process.send()'
        console.log(`Child: ${message}`);
    });
setTimeout( () => {
    console.log("end");
}, 13000);

let cP_2_options = {
    pwd: `${process.cwd()}`,
    //detached: <boolean>,
    //env: <object>, //default=process.env Environment key-value pairs
    //execPath <string>, //Executable used to create the child process
    //execArgv <string[]>, //List of string arguments passed to the executable. Default: process.execArgv
    //serialization <string>, //default = 'json'
    silent: true//, //if true, stdin, stdout, and stderr of the child will be piped to the parent
    //stdio <Array> | <string>, //See child_process.spawn()'s stdio. When this option is provided, it overrides silent.
    //uid <number>, //Sets the user identity of the process
    //gid <number> //Sets the user identity of the process
};
let modulePath = `${process.cwd()}/count_10.js`;
let childProcess_2 = child_process.fork(modulePath, cP_2_options); // child_process() returns an eventEmitter which is an IPC channel to the childProcess as I read it

childProcess_2.send("Hello there, a message from the parent process. You could pass objects e.g. an object resembling a server (which is called a server handle i think) or a socket.");