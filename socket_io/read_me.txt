socket.io
makes takes a httpServer as argument/parameter

for the http erver we use we additionall use a middleware

the httpServer is created with native node.js code
"const { Server } = require('http')
httpserver = Server(app)" or
"const httpserver = require('http').Server(app)"