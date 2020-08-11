import { Injectable } from '@angular/core';

import { CarouselContent } from './carousel-content.enum';
import carouselContent from './carousel-content.json'

@Injectable({
  providedIn: 'root'
})
export class CarouselContentService {

  constructor() {}

  getCarouselContent(location: CarouselContent): Array<string> {
    return carouselContent[location];
  }
}
