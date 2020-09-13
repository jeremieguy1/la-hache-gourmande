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

import {
  Availabilities
} from './../../config/enums/availabilities.enum';

@Component({
  templateUrl: './availabilities.component.html',
  styleUrls: ['./availabilities.component.scss']
})
export class AvailabilitiesComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.AVAILABILITIES;

  available: number = Availabilities.AVAILABLE;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setPageTitle(PagesNameTitleEnum.AVAILABILITIES);
  }

}
