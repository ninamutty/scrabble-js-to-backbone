// spec/player_spec.js

import Player from 'player';

describe('Player', function() {
  var player;
  beforeEach(function() {
    player = new Player("bob");
  });
  describe('Constructor', function() {
    it('Constructor Exists', function() {
      expect(Player).toBeFunction();
    });
    it('Constructor Initializes attributes', function() {
      expect(player.name).toEqual("bob");
      expect(player.plays).toEqual([]);
    });
  });

  describe('totalScore', function() {
    it('totalScore starts at 0', function() {
      expect(player.totalScore()).toEqual(0);
    });
  });


  describe('hasWon', function() {
    it('Starts off being false', function() {
      expect(player.hasWon()).toBeFalsy();
    });
  });
});
