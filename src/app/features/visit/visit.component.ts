import {
  Component,
  OnInit
} from '@angular/core';

import {
  TitleService
} from './../title.service';

import {
  PagesNameEnum,
  PagesNameEnumFR
} from './../../config/enums/pages-name.enum';

@Component({
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.VISIT;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(PagesNameEnumFR.VISIT);
  }
}
