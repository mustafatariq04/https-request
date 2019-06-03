var getHTML = require('../step-5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, function printLowerCase(html) {
  console.log(html.toLowerCase());
});
