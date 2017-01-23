'use strict';

module.exports = {
  countWordsInText: function (text) {
    // Capitalized or not, a word is considered the same
    text = text.toLowerCase();
    // Only keep letters for comparison and whitespaces for separation
    text = text.replace(/[^a-z ]/g, '');

    var wordsArray  = text.split(' ');
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

    return wordsObject;
  },
  countSample: function() {
    var sample = require('./sample.json');
    return this.countWordsInText(sample);
  }
};
