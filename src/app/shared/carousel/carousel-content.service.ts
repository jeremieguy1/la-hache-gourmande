import {
  Injectable
} from '@angular/core';

import {
  PagesNameEnum
} from './../../config/enums/pages-name.enum';

import 
  carouselContent 
from '../../config/content/carousel-content.json';

@Injectable({
  providedIn: 'root'
})
export class CarouselContentService {

  constructor() {}

  /**
   * Fetch data from carousel service
   * @param location The location of the carousel
   * @return The date fetched from the service
   */
  getCarouselContent(location: PagesNameEnum): Array<string> {
    return carouselContent[location];
  }
}
