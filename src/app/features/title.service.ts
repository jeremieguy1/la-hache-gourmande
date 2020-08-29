import {
  Injectable,
  LOCALE_ID,
  Inject
} from '@angular/core';

import {
  Title
} from '@angular/platform-browser';

import {
  PagesNameEnumTitleFR,
  PagesNameEnumTitleEN,
} from './../config/enums/pages-name.enum';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title,
    @Inject(LOCALE_ID) private locale: string) { }

  /**
   * Set the title of the page (Uppercase the first letter)
   * @param title The title to display
   */
  setTitle(title: string) {
    title = this.locale === 'fr' ? PagesNameEnumTitleFR[title] : PagesNameEnumTitleEN[title];
    this.title.setTitle(`${title.charAt(0).toUpperCase()}${title.slice(1)}`);
  }
}
