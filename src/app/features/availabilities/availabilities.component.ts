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
  templateUrl: './availabilities.component.html',
  styleUrls: ['./availabilities.component.scss']
})
export class AvailabilitiesComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.AVAILABILITIES;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setPageTitle(PagesNameTitleEnum.AVAILABILITIES);
  }

}
