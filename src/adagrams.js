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
      'J','J','J',
      'K',
      'L','L','L','L',
      'M','M',
      'N',
      'O',
      'P','P',
      'Q',
      'R',
      'S','S','S','S',
      'T',
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

    let inputtedWord = word.split("");

    // for (const word of inputtedWord) {
    //   if (tempHand.includes(word)
    // }
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

  scoreWord() {

  },

  highestScoreFrom() {

  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
