// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// ** Bonus **
// * Generate the good / bad phrase randomly from a list of predefined phrases
// * Use the `twitter` package inside the response to also return a random tweet!


// include http module
var http = require('http');

// include twitter module
var twitter = require('twitter');

// declare ports
var PORT1 = 7000;
var PORT2 = 7500;

// function to handle port 1
function handleRequests1(request, response){
  // 3 random phrases
  var i = Math.floor(Math.random() * (2 + 1));
  var badPhrases = ['Something Bad.', 'Something Worse.', 'Something Even Worse!'];
  response.end(badPhrases[i]);
}


// function to handle port 2
function handleRequests2(request, response){
  // 3 random phrases
  var i = Math.floor(Math.random() * (2 + 1));
  var goodPhrases = ['Something Good.', 'Something Better.', 'Something Great!'];
  response.end(goodPhrases[i]);
}


// instantiate our servers
var server1 = http.createServer(handleRequests1);
var server2 = http.createServer(handleRequests2);


// Listen on port 7000 and console log message
server1.listen(PORT1, function(){
  console.log("SERVER LISTENING ON: http://localhost:%s", PORT1);
});

// Listen on port 7500 and console log message
server2.listen(PORT2, function(){
  console.log("SERVER LISTENING ON: http://localhost:%s", PORT2);
});