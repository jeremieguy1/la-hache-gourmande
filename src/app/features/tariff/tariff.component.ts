import {
  Component,
  OnInit
} from '@angular/core';

import { PagesNameEnum } from './../../shared/enums/pages-name.enum';

import {
  faHome,
  faTimes,
  faCheck,
  faPlus,
  faPercent
} from '@fortawesome/free-solid-svg-icons'

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
  constructor() { }

  ngOnInit(): void {
  }

}
