// player.js

import Scrabble from 'scrabble';
import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  defaults: {
    plays: [],
    name: "Player-?"
  },
  initialize: function(options) {
    this.scrabble = new Scrabble();
  },
  hasWon: function() {
    return this.totalScore() > 100;
  },
  totalScore: function() {
    var total = 0;
    var plays = this.get('plays');
    for (var i = 0; i < plays.length; i++){
      total += this.scrabble.score(plays[i]);
    }
    return total;
  },
  highestScoringWord: function() {
    return this.scrabble.highestScoreFrom(this.get('plays'));
  },
  highestWordScore: function() {
    return this.scrabble.score(this.scrabble.highestScoreFrom(this.get('plays')));
  },
  play: function(word) {
    if (this.hasWon()){
      return false;
    } else {
      this.get('plays').push(word);
    }
  }
}
);

export default Player;
