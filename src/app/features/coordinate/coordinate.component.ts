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
  PagesNameTitleEnum
} from './../../config/enums/pages-name.enum';

import {
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.scss']
})
export class CoordinateComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhone;

  pageName: string = PagesNameEnum.COORDINATES;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setPageTitle(PagesNameTitleEnum.COORDINATES);
  }

}
