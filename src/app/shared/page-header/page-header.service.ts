import {
  Injectable
} from '@angular/core';

import {
  PageHeader
} from './page-header';

import
  pageHeaderJSON
from '../../config/content/page-header.json';

@Injectable({
  providedIn: 'root'
})
export class PageHeaderService {

  constructor() { }

  getContent(pageName: string): PageHeader {
    return pageHeaderJSON[pageName];
  }
}
