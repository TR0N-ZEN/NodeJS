// express eases the process of HTTP requestes and responses
// by exposing HTML functionalities as a minimal API for using HTTP functionalities
// link: https://expressjs.com/de/4x/api.html#app
const express = require('express');
const app = express(); // app is an instance of the middleware class express

// Syntax: app.METHOD(PATH, HANDLER)
// METHOD from { get | post | put | delete | ... }
// PATH is a path on the server
// HANDLER is a function

// defines behaviour when server receives a HTTP GET request to the HTTP servers root folder
app.get('/', function (req, res) {
  res.send('Got a GET request');
});
// same as above just for HTTP POST request
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
// defines baheviour on HTTP PUT request with PATH == '/user'
app.put('/user', function (req, res) {
  res.send('Got a PUT request to path "/user"');
});
// same as directly above just for HTTP DELETE request
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

const port = 3001;
app.listen(port, () => {
  console.log(`'programm1.js' listening at http://localhost:${port}`)
})