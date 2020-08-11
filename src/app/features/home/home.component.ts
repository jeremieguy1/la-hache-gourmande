import { 
  Component,
  OnInit 
} from '@angular/core';

import { 
  CarouselContent
} from '../../shared/carousel/carousel-content.enum';

import {
  CarouselContentService
} from '../../shared/carousel/carousel-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * Prefix for asset folder
   */
  ASSETS_PREFIX: string = '../../assets/carousel/home/'

  /**
   * Id for the carousel
   */
  idCarousel: string = 'home'

  /**
   * Content of the carousel
   */
  carouselContent: Array<string>

  constructor(private carouselContentService: CarouselContentService) { }

  ngOnInit(): void {
    this.carouselContent = this.computeCarouselContent(this.getCarouselContent());
  }

  /**
   * Fetch data from carousel service
   * @return The date fetched from the service
   */
  getCarouselContent(): Array<string> {
    return this.carouselContentService.getCarouselContent(CarouselContent.HOME);
  }

  /**
   * Compute image names fetched with the prefix
   * @param carouselContent The data fetched
   * @return The data fetched with the prefix
   */
  computeCarouselContent(carouselContent: Array<string>): Array<string> {
    let _carouselContent: Array<string> = [];
    for (let [_i, content] of carouselContent.entries()) {
      _carouselContent[_i] = this.ASSETS_PREFIX + content;
    }
    return _carouselContent;
  }
}
