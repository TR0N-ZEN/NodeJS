const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
	console.log(`From server: ${message}`);
	parentPort.postMessage("thread_1 received a message.");
});
