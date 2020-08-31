import { 
  Component,
  OnInit,
  HostListener,
  Inject,
  LOCALE_ID
} from '@angular/core';

import {
  Router,
  NavigationEnd,
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

  faArrowUp = faArrowUp;

  /**
   * Path to redirect by the back to top button
   */
  skipLinkPath: string;

  /**
   * Tell if the window is scrolled
   */
  isScrolled: boolean = false;

  /**
   * Path to redirect for locale link
   */
  hrefLocale: string;
  
  constructor(private router: Router,
    @Inject(LOCALE_ID) protected locale: string) { }

    /**
     * Says if the screen is scrolled between a threshold
     */
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop  > 100 || document.body.scrollTop > 100) {
          this.isScrolled = true;
      } 
     else if (this.isScrolled && window.pageYOffset || document.documentElement.scrollTop < 10 || document.body.scrollTop < 10) {
          this.isScrolled = false;
      }
  }

  ngOnInit() {
    // Set the skiplink path
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(() => {
        if (!this.router.url.endsWith('#main-content')) {
            this.skipLinkPath = `/${this.locale}${this.router.url}#main-content`;
        }
    });
  }

  /**
   * Set the link to redurect when a flag button is clicked
   * @param locale the locale to switch
   */
  redirectTo(locale: string): void {
    this.hrefLocale = `${window.location.origin}/${locale}${this.router.url}`;
  }
}
