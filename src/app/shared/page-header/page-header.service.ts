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

  /**
   * Fetch data for the page heaeder
   * @param pageName The pageName of the page header to return
   * @return The page header wanted
   */
  getContent(pageName: string): PageHeader {
    return pageHeaderJSON[pageName];
  }
}
