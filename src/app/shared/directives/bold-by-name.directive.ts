import {
  Directive,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import {
  BoldNames
} from '../enums/bold-names.enum';

@Directive({
  selector: '[appBoldByName]'
})
export class BoldByNameDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    let words = this.el.nativeElement.childNodes[0].innerHTML.split(' ');
    for(let [_i, word] of words.entries()) {
      let currentWord:string[] = word.split('_');
      if (currentWord.length > 1) {
        const tmp = currentWord;
        currentWord = [];
        currentWord.push(tmp.join(' '));
      }
      if (Object.values(BoldNames).find(e => e === currentWord[0].toLowerCase())) {
        words[_i] = currentWord[0].bold();
      }
    }
    this.el.nativeElement.childNodes[0].innerHTML = words.join(' ');
  }

}
