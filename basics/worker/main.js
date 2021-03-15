const { Worker } = require('worker_threads');

let thread_1 = new Worker("./thread_1.js");

thread_1.on('message', (message) => {
	console.log(`From thread_1: ${message}`);
});

thread_1.postMessage("Hello");