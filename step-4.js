

var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML(options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf8');

    let bufferedOutput = "";
    response.on('data', function (data) {
      bufferedOutput += data
      console.log(bufferedOutput);
    });

    response.on('end', function() {
      callback();
    });

  });

}

function printHTML (html) {
  console.log(html);
}


getHTML(requestOptions, printHTML);