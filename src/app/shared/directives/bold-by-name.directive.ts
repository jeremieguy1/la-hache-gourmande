import {
  Directive,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import {
  BoldNamesEnum
} from '../../config/enums/bold-names.enum';

@Directive({
  selector: '[appBoldByName]'
})
export class BoldByNameDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.boldContent();
    
  }

  /**
   * Bold a list of words defined in BoldNamesEnum.
   */
  boldContent(): void {
    const words = this.el.nativeElement.childNodes[0].innerHTML.split(' ');
    for(const [_i, word] of words.entries()) {
      let currentWord:string[] = word.split('_');
      if (currentWord.length > 1) {
        const tmp = currentWord;
        currentWord = [];
        currentWord.push(tmp.join(' '));
        console.log(currentWord)
      }
      if (Object.values(BoldNamesEnum).find(e => e === currentWord[0].toLowerCase())) {
        words[_i] = currentWord[0].bold();
      }
    }
    this.el.nativeElement.childNodes[0].innerHTML = words.join(' ');
  }

}
