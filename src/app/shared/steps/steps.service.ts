import {
  Steps
} from './../../shared/steps/steps';

import {
  Injectable
} from '@angular/core';

import
  stepsContentJSON
from '../../config/content/steps-content.json';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  constructor() { }

  getContent(id: string): Steps {
    return stepsContentJSON[id];
  }
}
