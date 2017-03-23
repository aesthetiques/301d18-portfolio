'use strict';

//Initialize your project using NPM to create and populate a package.json file
const express = require('express');
// : Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const app = express();

const PORT = process.env.PORT || 3000;

//Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

//Using the response object, send the index.html file back to the user
app.get('/index', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});

});

app.listen(PORT, function() {
  console.log('you are on port number: ' + PORT + ', sucka.');
  //Log to the console a message that lets you know which port your server has started on
});
