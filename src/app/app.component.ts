import { 
  Component, OnInit, HostListener
} from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import {
  filter
} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'la-hache-gourmande';

  faArrowUp = faArrowUp;

  skipLinkPath: string;

  isScrolled: boolean = false;
  
  constructor(private router: Router) {
    
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
          this.skipLinkPath = `${this.router.url}#main-content`;
      }
   });
  }

  scroll(): void {
    console.log(window.pageYOffset > 100)
    this.isScrolled = window.pageYOffset > 100;
  }
}
