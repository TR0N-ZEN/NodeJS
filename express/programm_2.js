const express = require('express');
const app = express();

app.use(express.static('public'));
// now files from the directory location where this node process was started can be loaded
// in this case files can be loaded via http requests form the relative path 'public' which is a folder in the current working directory

const port = 3002;
app.listen(port, () => {
  console.log(`'programm_2.js' listening at http://localhost:${port}`)
})

// if files were existent in path './public'
// files can be loaded like so:
// http://localhost:3000/images/kitten.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/app.js
// http://localhost:3000/images/bg.png
// http://localhost:3000/hello.html
// if the files were accessible in the filestructure with:
// ./public/images/kitten.jpg
// ./public/css/style.css
// ./public/js/app.js
// ./public/images/bg.png
// ./public/hello.html

app.use(express.static('public'));
app.use(express.static('files'));
// if one and the same path is existent from './public' and './files'
// the found file in './public' woud be served since it is the first match and it wont even be searched for a second in './files'


app.use('/static', express.static('public'));
// introduces a 'virtual' folder so that files have to be accessed like so:
// http://localhost:3000/static/images/kitten.jpg
// http://localhost:3000/static/css/style.css
// http://localhost:3000/static/js/app.js
// http://localhost:3000/static/images/bg.png
// http://localhost:3000/static/hello.html


// app.use('/static', express.static(__dirname + '/public'));
// just as above but with the security of serving the right files becaues 'express.static()' is passed an absolute path