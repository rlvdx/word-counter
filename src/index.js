var countSample = function() {
  var sample = require('./sample.json');
  var wordsArray = sample.split(' ');
  console.log(wordsArray);
};

module.exports = {
  countSample: countSample
};
