
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
    let syllableTotal = 0;
    console.log("words before the loop: " + this.lineWords);
    for (let i = 0; i < this.lineWords.length; i++){
      console.log("word in loop: " + this.lineWords[i]);
      syllableTotal += this.countWordSyllables(this.lineWords[i])
    }
    this.lineSyllables = syllableTotal;
    return syllableTotal;
  }

    countWordSyllables(word){
      let syllableCount = 0;
      let haikuChar = word.split("");
      console.log(haikuChar);
      for (let i = 0; i < haikuChar.length; i++){
        let doubleVowel = (i - 1);
        if (haikuChar[i].match(/[aeiou]/gi)){
          console.log("vowels: " + haikuChar[i]);
          if (haikuChar[0].match(/[aeiou]/gi )){
            syllableCount++;
          } else if (haikuChar[i].match(/[aeiou]/gi) && haikuChar[doubleVowel].match(/[aeiou]/gi)){
            i++;
          } else{
            syllableCount++;
          }
        }
      };
      console.log("syllable count: " + syllableCount);
      return syllableCount;
    };
  };
