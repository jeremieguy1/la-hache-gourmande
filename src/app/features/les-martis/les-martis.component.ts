import {
  Component, OnInit
} from '@angular/core';

import {
  PagesNameEnum
} from './../../config/enums/pages-name.enum';

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
