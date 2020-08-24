import { Injectable } from '@angular/core';

import { History } from './history';
import 
  historyJSON 
from '../../config/content/history.json';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  getContent(): History {
    return historyJSON;
  }
}
