import {Component} from 'angular2/core';
import {WORDS} from './words';

@Component({
  selector: 'my-app',
  template: `
    <textarea #essay>{{textInput}}</textarea>
    <br />
    <button (click)="layOnMeMan(essay.value)">Check It!</button>
    <br />
    {{message}}`
})

export class AppComponent { 
  message = '';


  layOnMeMan(essay:string) {
    var complexWords = [];
    var words = essay.split(' ');

    words.forEach(function (word) {
      if (!WORDS[word.toLowerCase()]) {
        complexWords.push(word);
      }
    });

    this.message = complexWords.join(', ');
  }
}
