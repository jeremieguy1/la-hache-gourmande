import {
  Component, OnInit
} from '@angular/core';

import {
  TitleService
} from './../title.service';

import {
  PagesNameEnum,
  PagesNameEnumFR
} from './../../config/enums/pages-name.enum';

import {
  HistoryService
} from './history.service';

import {
  History
} from './history';

@Component({
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.HISTORY;

  historyContent: History;

  constructor(private historyService: HistoryService,
    private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle(PagesNameEnumFR.HISTORY);
    this.historyContent = this.historyService.getContent();
  }

}
