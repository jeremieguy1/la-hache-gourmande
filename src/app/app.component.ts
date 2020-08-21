import { 
  Component
} from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import {
  filter
} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'la-hache-gourmande';

  skipLinkPath: string;
  
  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(() => {
      if (!this.router.url.endsWith('#main-content')) {
          this.skipLinkPath = `${this.router.url}#main-content`;
      }
   });
  }
}
