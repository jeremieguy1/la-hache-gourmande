import {
  ImagePageContent
} from './image-content';

import {
  Injectable
} from '@angular/core';

import 
  imagePageContentJSON
from './image-page-content.json';

@Injectable({
  providedIn: 'root'
})
export class ImagePageContentService {

  constructor() { }

  getContent(id: string): ImagePageContent {
    return imagePageContentJSON[id];
  }
}
