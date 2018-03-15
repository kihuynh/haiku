import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  it('takes in haiku line and returns the number of syllables', function() {
    let newHaiku = new Haiku("haiku");
    let syllableCount = 2;
    let haikuLine = "haiku"
    expect(newHaiku.countWordSyllables(haikuLine)).toEqual(syllableCount);
  })


  it('should split line into words', function() {
    let newHaiku = new Haiku("sunny sunshine depressing mood");

    let splitWords = ["sunny", "sunshine", "depressing", "mood"];
    newHaiku.wordSplitter();
    console.log(newHaiku.lineWords);
    expect(newHaiku.lineWords).toEqual(splitWords);
  })

//might need describes put back in.


  // it('should take an array of words and count all the syllables in all words', function() {
  //   let newHaiku = new Haiku("sun is fun for you");
  //   let words = newHaiku.wordSplitter();
  //   expect(newHaiku.countWordSyllables(words)).toEqual(5);
  // })
});
