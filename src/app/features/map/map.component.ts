import {
  PagesNameEnum
} from './../../shared/enums/pages-name.enum';

import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  pageName = PagesNameEnum.MAP;

  constructor() { }

  ngOnInit(): void {
  }

}
