var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response){
    console.log("downloading image")
    console.log('Response status code :', response.statusCode);
    console.log('Response status Message :', response.statusMessage);
    console.log('Response Content type :', response.headers['content-type']);
    console.log("download complete")
  })
  .pipe(fs.createWriteStream('./future.jpg'));

