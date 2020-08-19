import { Steps } from './../../shared/steps/steps';

import { Injectable } from '@angular/core';

import
  visitJSON
from './visit.json';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor() { }

  getContent(): Steps {
    return visitJSON["visit"];
  }
}
