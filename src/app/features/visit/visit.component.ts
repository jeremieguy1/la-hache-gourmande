import {
  Component,
  OnInit
} from '@angular/core';

import {
  PagesNameEnum
} from './../../config/enums/pages-name.enum';

@Component({
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.VISIT;

  constructor() {}

  ngOnInit(): void {
  }
}
