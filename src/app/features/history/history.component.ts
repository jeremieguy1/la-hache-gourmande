import {
  Component, OnInit
} from '@angular/core';

import {
  PagesNameEnum
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

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.historyContent = this.historyService.getContent();
  }

}
