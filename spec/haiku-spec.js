import { Haiku } from './../src/haiku.js';


describe('countVowels', function() {
  let newHaiku = new Haiku("haiku");
  let vowelCount = 2;
  let haikuLine = "haiku"
  it('takes in haiku line and returns the number of vowels', function(){
    expect(newHaiku.countVowels()).toEqual(vowelCount);
  })
});
describe('wordSplitter', function() {
  let newHaiku = new Haiku("sunny sunshine depressing mood");
  let splitWords = ["sunny", "sunshine", "depressing", "mood"];
  it('should split line into words', function() {
    expect(newHaiku.wordSplitter()).toEqual(splitWords);
  })
});
