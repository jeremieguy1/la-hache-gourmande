import { PagesNameEnum } from './../../shared/enums/pages-name.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './disponibility.component.html',
  styleUrls: ['./disponibility.component.scss']
})
export class DisponibilityComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.DISPONIBILITY;

  constructor() { }

  ngOnInit(): void {
  }

}
