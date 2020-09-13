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
  PagesNameStepsEnumTitleFR,
  PagesNameStepsEnumTitleEN
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
  setPageTitle(title: string): void {
    title = this.locale === 'fr' ? PagesNameEnumTitleFR[title] : PagesNameEnumTitleEN[title];
    this.title.setTitle(`${title.charAt(0).toUpperCase()}${title.slice(1)} | La hache gourmande`);
  }

  /**
   * Set the title of the page by steps (Uppercase the first letter)
   * @param title The title to display
   */
  setStepsTitle(idTitle: string): void {
    idTitle = this.locale === 'fr' ? PagesNameStepsEnumTitleFR[idTitle] : PagesNameStepsEnumTitleEN[idTitle];
    this.title.setTitle(`${idTitle.charAt(0).toUpperCase()}${idTitle.slice(1)} | La hache gourmande`);
  }
}
