import {
  Component,
  OnInit
} from '@angular/core';

import {
  TitleService
} from './../title.service';

import {
  PagesNameEnum,
  PagesNameTitleEnum
} from './../../config/enums/pages-name.enum';

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.MAP;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setPageTitle(PagesNameTitleEnum.MAP);
  }

}
