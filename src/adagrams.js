const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const alphabets = [
      'A','A','A','A','A','A','A','A','A',
      'B','B',
      'C','C',
      'D','D','D','D',
      'E','E','E','E','E','E','E','E','E','E','E','E',
      'F','F',
      'G','G','G',
      'H','H',
      'I','I','I','I','I','I','I','I','I',
      'J',
      'K',
      'L','L','L','L',
      'M','M',
      'N','N','N','N','N','N',
      'O','O','O','O','O','O','O','O',
      'P','P',
      'Q',
      'R','R','R','R','R','R',
      'S','S','S','S',
      'T','T','T','T','T','T',
      'U',
      'V','V',
      'W','W',
      'X',
      'Y','Y',
      'Z'
    ];

    function genLetterPool(alphabets) {
      // we need to initilize an empty
      let hand = [];
      for (let i=0, sampleCount=10; i < sampleCount; i+=1) {
        // we use Math.random maybe a combo Math.floor
        hand.push(alphabets[Math.floor(Math.random()*alphabets.length)]);
      }
      return hand;
    }

    return genLetterPool(alphabets)
  },


  usesAvailableLetters(word, hand) {
    let tempHand = Array.from(hand);

    let inputtedWord = word.toUpperCase().split("");


    for (let i=0; i < inputtedWord.length; i+=1){
      if (tempHand.includes(inputtedWord[i])) {
        const index = tempHand.indexOf(inputtedWord[i])
        delete tempHand[index];
      }
      else {
        return false;
      }
    }
    return true;

  },

  scoreWord(word) {
    const scoreValues = {
      A:1,
      B:3,
      C:3,
      D:2,
      E:1,
      F:4,
      G:2,
      H:4,
      I:1,
      J:8,
      K:5,
      L:1,
      M:3,
      N:1,
      O:1,
      P:3,
      Q:10,
      R:1,
      S:1,
      T:1,
      U:1,
      V:4,
      W:4,
      X:8,
      Y:4,
      Z:10,
    };

    let score = 0;

    let inputtedWord = word.toUpperCase().split("");
    for (const letter of inputtedWord) {
      score += scoreValues[letter];
    }

    if (word.length > 6 && word.length < 11){
      score += 8;
    }

    return score;
  },


  highestScoreFrom(words) {
    let highestScoring = {
      word: '',
      score: 0,
    };

    for (const word of words) {
      const scoreForWord = this.scoreWord(word);

      if (scoreForWord > highestScoring.score) {
        highestScoring.score = scoreForWord;
        highestScoring.word = word;
      }
      else if (scoreForWord === highestScoring.score) {
        // tie if new word is 10 it wins
        if (word.length == 10 && highestScoring.word.length != 10) {
          highestScoring.score = scoreForWord;
          highestScoring.word = word;
        }
        // if both words are not 10 and if new word is less letters wins
        else if (word.length < highestScoring.word.length && highestScoring.word.length != 10) {
          highestScoring.score = scoreForWord;
          highestScoring.word = word;
        }
      }
    }

    return highestScoring;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
