import {
  Injectable
} from '@angular/core';

import {
  Title
} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title) { }

  /**
   * Set the title of the page (Uppercase the first letter)
   * @param title The title to display
   */
  setTitle(title: string) {
    this.title.setTitle(`${title.charAt(0).toUpperCase()}${title.slice(1)}`);
  }
}
