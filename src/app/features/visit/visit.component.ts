
import {
  Component, OnInit
} from '@angular/core';

import {
  PagesNameEnum
} from './../../shared/enums/pages-name.enum';

@Component({
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  pageName: string = PagesNameEnum.VISIT;

  constructor() {}

  ngOnInit(): void {
  }
}
