// express eases the process of HTTP requestes and responses
// by exposing HTML functionalities as a minimal API for using HTTP functionalities
// link: https://expressjs.com/de/4x/api.html#app
const express = require('express')
const app = express()
const port = 3000

// on an HTTP GET request to the websites '/' file so the root file the HTTP response is the string 'Hello World'
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// middleware will make the HTTP server listen on localhost (I assume that is the default value if nothing is specified) on the specified port passed as first argument/parameter
app.listen(port, () => {
  console.log(`'hello_world.js' listening at http://localhost:${port}`)
})

