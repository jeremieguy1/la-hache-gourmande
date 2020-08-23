import {
  Component, OnInit
} from '@angular/core';

import {
  PagesNameEnum
} from './../../config/enums/pages-name.enum';

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
