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

  setTitle(title: string) {
    this.title.setTitle(`${title.charAt(0).toUpperCase()}${title.slice(1)}`);
  }
}
