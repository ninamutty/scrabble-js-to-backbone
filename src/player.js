// player.js

import Scrabble from 'scrabble';

const Player = function(name) {
  this.name = name;
  this.plays = [];
};


Player.prototype.hasWon = function() {
  return this.totalScore() > 100;
};

Player.prototype.totalScore = function() {
  var total = 0;
  for (var i = 0; i < this.plays.length; i++){
    total += Scrabble.score(this.plays[i]);
  }
  return total;
};

Player.prototype.highestScoringWord = function() {
  return Scrabble.highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function() {
  return Scrabble.score(Scrabble.highestScoreFrom(this.plays));
};

export default Player;
