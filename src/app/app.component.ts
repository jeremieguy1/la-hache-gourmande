import { 
  Component,
  OnInit,
  HostListener,
  Inject,
  LOCALE_ID
} from '@angular/core';

import {
  Router,
  NavigationEnd
} from '@angular/router';

import {
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';

import {
  filter
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'la-hache-gourmande';

  faArrowUp = faArrowUp;

  skipLinkPath: string;

  isScrolled = false
  
  constructor(private router: Router,
    @Inject(LOCALE_ID) protected locale: string) {
        
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.isScrolled = true;
      } 
     else if (this.isScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.isScrolled = false;
      }
  }
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(() => {
      if (!this.router.url.endsWith('#main-content')) {
          this.skipLinkPath = `/${this.locale}${this.router.url}#main-content`;
      }
   });
}

  scroll(): void {
    this.isScrolled = window.pageYOffset > 100;
  }
}
