// spec/player_spec.js

import Player from 'player';

describe('Player', function() {
  var player;
  beforeEach(function() {
    player = new Player();
  });
  describe('Constructor', function() {
    it('Constructor Exists', function() {
      expect(Player).toBeFunction();
  });
  });
});
