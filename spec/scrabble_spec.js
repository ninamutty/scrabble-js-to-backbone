
import Scrabble from 'scrabble';


describe('Scrabble', function() {
  var scrabble;
  beforeEach(function() {
    scrabble = new Scrabble();
  });
  describe('Constructor Testing', function() {
    it('Constructor exists', function() {
      expect(Scrabble).toBeFunction();
    });
  });
});
