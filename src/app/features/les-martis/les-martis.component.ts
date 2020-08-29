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
  templateUrl: './les-martis.component.html',
  styleUrls: ['./les-martis.component.scss']
})
export class LesMartisComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.LESMARTIS;
  
  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle(PagesNameTitleEnum.LESMARTIS);
  }

}
