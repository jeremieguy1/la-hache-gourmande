import {
  Injectable
} from '@angular/core';

import {
  Description
} from './description';

import
  descriptionJSON
from './description.json';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor() { }

  getContent(id: string): Description {
    return descriptionJSON[id];
  }
}