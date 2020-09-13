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

import {
  faBed,
  faTimes,
  faCheck,
  faPlus,
  faPercent
} from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  faBed = faBed;
  faTimes = faTimes;
  faCheck = faCheck;
  faPlus = faPlus;
  faPercent = faPercent;

  pageName: PagesNameEnum = PagesNameEnum.PRICES;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setPageTitle(PagesNameTitleEnum.PRICES);
  }

}
