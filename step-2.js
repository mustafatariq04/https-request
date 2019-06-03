// use a buffering technique to append each chunk of data to a variable as it is received, and then console.log the data once all of the data has been received


var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    let bufferedOutput = "";

    response.on('data', function (data) {
      bufferedOutput += data
      console.log(bufferedOutput);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTML();