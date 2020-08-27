import {
  Component,
  OnInit,
  Inject
} from '@angular/core';

import {
  TitleService
} from './../title.service';

import {
  PagesNameEnum,
  PagesNameEnumFR
} from './../../config/enums/pages-name.enum';

import {
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

import {
  LOCALE_ID
} from '@angular/core';

@Component({
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.scss']
})
export class CoordinateComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhone;

  pageName: string = PagesNameEnum.COORDINATE;

  constructor(private titleService: TitleService,
    @Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit(): void {
    this.titleService.setTitle(PagesNameEnumFR.COORDINATE);
    console.log(this.localeId);
  }

}
