
export class Haiku {

  constructor(line1){
    this.lineOne = line1;
    this.lineSyllables;
    this.lineWords = [];
  }

  wordSplitter() {
    let line = this.lineOne;
    let haikuLine = line.split(" ");
      console.log("word split: " + haikuLine);
    for (let i = 0; i < haikuLine.length; i++) {
      console.log("word split: " + haikuLine[i]);
      this.lineWords.push(haikuLine[i]);
    }
    return haikuLine;
  }

  countSyllableTotal(){
    let syllableTotal;
    this.lineWords.forEach(function(word){

      syllableTotal += this.countWordSyllables(word)
    })
    this.lineSyllables = syllableTotal;
    return syllableTotal;
  }

    countWordSyllables(word){
      let wordToSplit = word;
      let syllableCount = 0;
      let haikuChar = wordToSplit.split('');
      console.log(haikuChar);
      for (let i = 0; i < haikuChar.length; i++){
        let doubleVowel = (i - 1);
        //vowel
        if (haikuChar[i].match(/[aeiou]/gi)){
          console.log("vowels: " + haikuChar[i]);
          if (haikuChar[i].match(/[aeiou]/gi) && haikuChar[doubleVowel].match(/[aeiou]/gi)){
            i++;
          }
        //conssonent
          else{
            syllableCount++;

          }
        };
      };
      console.log("syllable count: " + syllableCount);
      return syllableCount;
    };
  };
