

var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  https.get(options, function (response) {
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

getAndPrintHTML(requestOptions);