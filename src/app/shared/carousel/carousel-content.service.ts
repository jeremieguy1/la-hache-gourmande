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

  getCarouselContent(location: PagesNameEnum): Array<string> {
    return carouselContent[location];
  }
}
