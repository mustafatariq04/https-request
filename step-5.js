var https = require('https');

module.exports = function getHTML(options, callback) {
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
