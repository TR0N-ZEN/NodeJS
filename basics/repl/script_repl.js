const repl = require("repl");

let a = 10;
const repl_instance = repl.start("> ");
const second_repl_Instance = new repl.REPLServer(options);
repl_instance.context.A = a;

console.log(A);

//unfinished