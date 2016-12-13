// player.js

import Scrabble from 'scrabble';
import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  defaults: {
  },
  initialize: function(options) {
    this.name = options.name;
    this.plays = [];
  },
  hasWon: function() {
    return this.totalScore() > 100;
  },
  totalScore: function() {
    var total = 0;
    for (var i = 0; i < this.plays.length; i++){
      total += Scrabble.score(this.plays[i]);
    }
    return total;
  },
  highestScoringWord: function() {
    return Scrabble.highestScoreFrom(this.plays);
  },
  highestWordScore: function() {
    return Scrabble.score(Scrabble.highestScoreFrom(this.plays));
  },
  play: function(word) {
    if (this.hasWon()){
      return false;
    } else {
      this.plays.push(word);
    }
  }
}
);

export default Player;
