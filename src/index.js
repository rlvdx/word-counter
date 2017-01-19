module.exports = {
  countSample: function() {
    var sample = require('./sample.json');
    // Capitalized or not, a word is considered the same
    sample = sample.toLowerCase();
    // Only keep letters for comparison and whitespaces for separation
    sample = sample.replace(/[^a-z ]/g, '');

    var wordsArray  = sample.split(' ');
    // Remove words that have strictly less than three letters
    wordsArray = wordsArray.filter(function(val) { return val.length > 2 });

    var wordsObject = {};
    wordsArray.forEach(function(word) {
      if (wordsObject.hasOwnProperty(word)) {
        wordsObject[word]++;
        return true;
      }

      wordsObject[word] = 1;
    });

    console.log(wordsObject);
  }
};
