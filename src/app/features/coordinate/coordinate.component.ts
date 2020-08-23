import {
  Component,
  OnInit
} from '@angular/core';

import {
  PagesNameEnum
} from './../../config/enums/pages-name.enum';

import {
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons'

@Component({
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.scss']
})
export class CoordinateComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhone;

  pageName: PagesNameEnum = PagesNameEnum.COORDINATE;

  constructor() { }

  ngOnInit(): void {
    
  }

}
