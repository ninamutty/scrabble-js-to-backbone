// scrabble.js

import Backbone from 'backbone';

// Create default Scrabble object
const Scrabble = Backbone.Model.extend({

}, {
  scoreLetter: function(letter) {
    letter = letter.toUpperCase();
    var letters = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z'];
    var scores = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 8, 8, 10, 10];
    for (var i = 0; i < letters.length; i++){
      if (letters[i] == letter){
        return scores[i];
      }
    }
    return 0;
  },
  score: function(word) {
    var total = 0;
    for (var i = 0; i < word.length; i++){
      total += Scrabble.scoreLetter(word[i]);
    }
    if (word.length == 7){
      total += 50;
    }
    return total;
  },
  highestScoreFrom: function(arrayOfWords) {
    if (arrayOfWords.constructor !== Array || arrayOfWords.length === 0){
      return null;   // If there is nothing in the array, return null as the highest scoring word
    } else if (arrayOfWords.length == 1) {
      return arrayOfWords[0]; // If there is only one thing, return that thing and don't bother with loops
    }

    //If we got here, there are multiple words in the array
    var highest = [arrayOfWords[0], Scrabble.score (arrayOfWords[0])];

    for (var i = 0; i < arrayOfWords.length; i++){
      var score = Scrabble.score(arrayOfWords[i]);
      if (score > highest[1]) {
        highest = [arrayOfWords[i], score];
      } else if (score == highest[1]) {
        if ((arrayOfWords[i].length == 7 && highest[0].length != 7) ||
            (arrayOfWords[i].length < highest[0].length && highest[0].length != 7)) {
              highest = [arrayOfWords[i], score];
        }
      }
    }
    return highest[0];
  }
});



// Export so we can use it.
export default Scrabble;
