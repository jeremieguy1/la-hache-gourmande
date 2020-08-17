import { Injectable } from '@angular/core';

import { PagesNameEnum } from '../enums/pages-name.enum';
import carouselContent from './carousel-content.json'

@Injectable({
  providedIn: 'root'
})
export class CarouselContentService {

  constructor() {}

  getCarouselContent(location: PagesNameEnum): Array<string> {
    return carouselContent[location];
  }
}
