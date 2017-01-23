# WordCounter lib

> Count the occurrences words with more than two letters in a text

### Sample test command
With Node and npm installed, run `npm run sample` in your terminal.
It will read the text in `sample.json`, return and print an object containing the words as properties and their occurrences as values.

### Usage example
First, install it with `npm install --save rlvdx-word-counter`.

Then, a test file would look like this:
```javascript
'use strict';
var counter = require('rlvdx-word-counter');

var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit adipisicing elit, sed do eiusmod tempor incididunt et dolore magna aliqua. Ut veniam, exercitation ullamco laboris ex ea commodo aute irure dolor in fugiat nulla sint occaecat cupidatat non proident, anim id est laborum.';
var result = counter.countWordsInText(text);

console.log(result);
```
