import {
  Component, OnInit
} from '@angular/core';

import {
  TitleService
} from './../title.service';

import {
  PagesNameEnum,
  PagesNameTitleEnum
} from './../../config/enums/pages-name.enum';

@Component({
  templateUrl: './disponibility.component.html',
  styleUrls: ['./disponibility.component.scss']
})
export class DisponibilityComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.AVAILABILITIES;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle(PagesNameTitleEnum.AVAILABILITIES);
  }

}
