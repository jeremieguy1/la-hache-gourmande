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

  /**
   * Fetch data for the steps wanted
   * @param id The id of the steps to return
   * @return The steps wanted
   */
  getContent(id: string): Steps {
    return stepsContentJSON[id];
  }
}
