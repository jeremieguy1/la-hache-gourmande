import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  burgerClick(event: any): void {
    if ((event.type === "keydown" && event.code === "Enter") || event.type === "click") {
    const burger: Element = document.querySelector('.burger');
    const navMenu: Element = document.querySelector('#' + burger.attributes['data-target'].value);
    burger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
    document.querySelector('.navbar').classList.toggle('is-mobile');
    }
  }

}
