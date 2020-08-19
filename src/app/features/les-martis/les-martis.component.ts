import { PagesNameEnum } from './../../shared/enums/pages-name.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './les-martis.component.html',
  styleUrls: ['./les-martis.component.scss']
})
export class LesMartisComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.LESMARTIS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
