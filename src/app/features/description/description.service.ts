import {
  Injectable
} from '@angular/core';

import {
  Description
} from './description';

import
  descriptionJSON
from '../../config/content/description.json';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor() { }

  /**
   * Fetch the content of the description
   * @param id The id of the description needed
   */
  getContent(id: string): Description {
    return descriptionJSON[id];
  }
}
