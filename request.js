var request = require('request');
request('http://www.google.com', function (error, response, body) {
  
  console.log('body:', body); // Print the HTML for the Google homepage.
});