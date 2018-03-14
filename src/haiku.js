
export class Haiku {

  constructor(line1){
    this.lineOne = line1;
    // this.lineTwo = line2;
    // this.lineThree = line3;
  };

    countVowels(){
      let vowelCount = 0;
      let haikuChar = this.lineOne.split('');
      console.log(haikuChar);
      for (let i=0; i < haikuChar.length; i++){
        console.log(i);
        if (haikuChar[i].match(/[aeiou]/gi)){
          vowelCount++;
        };
      };
      console.log(vowelCount);
      return vowelCount;
    };
  };
