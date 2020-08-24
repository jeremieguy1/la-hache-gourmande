import { PageHeaderService } from './page-header.service';
import {
  Component, OnInit, Input
} from '@angular/core';

import {
  PageHeader
} from './page-header';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() pageName: string;

  headerContent: PageHeader

  constructor(private pageHeaderService: PageHeaderService) { }

  ngOnInit(): void {
    this.headerContent = this.pageHeaderService.getContent(this.pageName);
  }

}
