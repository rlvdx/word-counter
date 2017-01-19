module.exports = {
  countSample: function() {
    var sample     = require('./sample.json');
    var wordsArray = sample.split(' ');

    wordsArray = wordsArray.filter(function(val) { return val.length > 2 });

    // console.log('Array has ' + wordsArray.length + ' elements.');
    // console.log(wordsArray);
  }
};
