import {
  Component,
  OnInit
} from '@angular/core';

import {
  PagesNameEnum
} from './../../config/enums/pages-name.enum';


@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.MAP;

  constructor() { }

  ngOnInit(): void {
  }

}
