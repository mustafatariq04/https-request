var getHTML = require('../step-5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(requestOptions, function printUpperCase(html) {
  let output = html.toUpperCase();
  console.log(output);
});