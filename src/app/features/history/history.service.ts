import {
  Injectable
} from '@angular/core';

import {
  History
} from './history';

import 
  historyJSON 
from '../../config/content/history.json';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  /**
   * Fetch the content of the history
   */
  getContent(): History {
    return historyJSON;
  }
}
