// problem 42: coded triangle numbers

const fs = require('fs');
var triangle = {};
const alphaIndex = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generateSieve() {
  // init triangle sieve
  for (var i = 0; i < 150; i++) {
    triangle[i] = 0; 
  }
  // calculate first triangle numbers up to 150
  for (var i = 0; i < 50; i++) {
    triangle[0.5 * i * (i + 1)] = 1;
  }
}

function countWords(words) {
  var wordCount = 0;
  for (var i = 0; i < words.length; i++) {
    // loop through each position of word to add
    var word = words[i];
    var wordLength = 0;
    for (var j = 0; j < word.length; j++) {
      wordLength += alphaIndex.indexOf(word[j]) + 1;
    }
    // console.log(wordLength);
    if (triangle[wordLength]) {
      wordCount++;
    }
  }
  return wordCount;
}


function compute() {
  var words = [];
  // parse file into array
  fs.readFile('p042_words.txt', 'utf8', (err, data) => {
    if (err) throw err;
    words = data.replace(/"/g, '').split(',');
    var total = countWords(words);
    console.log('total coded triangle numbers: ' + total);
    // console.log('SKY: ' + countWords(['SKY']));
  });
}

generateSieve();
compute();