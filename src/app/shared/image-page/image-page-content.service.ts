import {
  ImagePageContent
} from './image-content';

import {
  Injectable
} from '@angular/core';

import 
  imagePageContentJSON
from '../../config/content/image-page-content.json';

@Injectable({
  providedIn: 'root'
})
export class ImagePageContentService {

  constructor() { }

  /**
   * Fetch data for the image page
   * @param id The id of the image page to return
   * @return The image page wanted
   */
  getContent(id: string): ImagePageContent {
    return imagePageContentJSON[id];
  }
}
