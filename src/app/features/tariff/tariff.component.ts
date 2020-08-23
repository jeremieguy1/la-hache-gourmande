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

import {
  faHome,
  faTimes,
  faCheck,
  faPlus,
  faPercent
} from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {

  faHome = faHome;
  faTimes = faTimes;
  faCheck = faCheck;
  faPlus = faPlus;
  faPercent = faPercent;

  pageName: PagesNameEnum = PagesNameEnum.TARIFF;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle(PagesNameEnumFR.TARIFF);
  }

}
