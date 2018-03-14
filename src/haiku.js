
export class Haiku {

  constructor(line1){
    this.lineOne = line1;
    // this.lineTwo = line2;
    // this.lineThree = line3;
  };
    wordSplitter(){
      let haikuLine = this.lineOne.split(' ');
      return haikuLine;
    };

    countVowels(){
      let vowelCount = 0;
      let haikuChar = this.lineOne.split('');
      console.log(haikuChar);
      for (let i = 0; i < haikuChar.length; i++){
        let doubleVowel = (i - 1);
        if (haikuChar[i].match(/[aeiou]/gi)){
          console.log(haikuChar[i]);
          if (haikuChar[i].match(/[aeiou]/gi) && haikuChar[doubleVowel].match(/[aeiou]/gi)){
            i++;
          }
          else{
            vowelCount++;
          }
        };
      };
      console.log(vowelCount);
      return vowelCount;
    };
  };
