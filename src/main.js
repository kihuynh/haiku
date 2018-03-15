import { Haiku } from './haiku.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#haiku-form').submit(function(event){
    event.preventDefault();
    let haiku = new Haiku($('#text-form').val())
    haiku.wordSplitter();
    haiku.countSyllableTotal();
    if (haiku.lineSyllables === 17) {
      $('.results').text("It's a haiku" + " " + haiku.lineSyllables);
    } else {
    $('.results').text("not a haiku" + " " + haiku.lineSyllables);
    }
  });
});
