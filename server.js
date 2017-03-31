'use strict';

//Initialize your project using NPM to create and populate a package.json file
const express = require('express');
const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

//Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Using the response object, send the index.html file back to the user
app.get('*', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});
function proxyGitHub(req, res){
  console.log('routing a request for a github resource');
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

//Log to the console a message that lets you know which port your server has started on
app.listen(PORT, function() {
  console.log(`you are on port number: http://localhost:${PORT}, sucka.`);
});
