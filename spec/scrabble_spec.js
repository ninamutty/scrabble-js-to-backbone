
import Scrabble from 'scrabble';


describe('Scrabble', function() {
  var scrabble;
  beforeEach(function() {
    scrabble = new Scrabble();
  });

  // Constructor Testing
  describe('Constructor Testing', function() {
    it('Constructor exists', function() {
      expect(Scrabble).toBeFunction();
    });
  });

  // Testing Score word
  describe('Testing Score for a word', function() {
    it('Function exists', function() {
      expect(Scrabble.score).toBeFunction();
    });

    it('Scores an empty word correctly', function() {
      expect(Scrabble.score('')).toEqual(0);
    });
    it('scores "bob" correctly', function() {
      expect(Scrabble.score('bob')).toEqual(7);
    });
    it('scores 7-letter words', function() {
      expect(Scrabble.score('aaaaaaa')).toEqual(50 + 7);
    });

    //Todo
      // Add testing for invalid words punctuation etc.
  });

  describe('testing highestScoreFrom', function() {
    it('highestScoreFrom exists', function() {
      expect(Scrabble.highestScoreFrom).toBeFunction();
    });
    it('highestScoreFrom picks the highest score from a list of words', function() {
      expect(Scrabble.highestScoreFrom(['aaa', 'bbb', 'abc', 'ppp', 'zzz'])).toEqual('zzz');
      expect(Scrabble.highestScoreFrom(['zzz', 'bbb', 'abc', 'ppp', 'aaa'])).toEqual('zzz');
      expect(Scrabble.highestScoreFrom(['bbb', 'abc', 'zzz', 'ppp', 'aaa'])).toEqual('zzz');
    });
  });

});
