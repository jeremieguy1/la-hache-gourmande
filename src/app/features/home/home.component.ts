import { 
  Component,
  OnInit 
} from '@angular/core';

import {
  TitleService
} from './../title.service';

import { 
  PagesNameEnum,
  PagesNameEnumFR
} from './../../config/enums/pages-name.enum';

import {
  CarouselContentService
} from '../../shared/carousel/carousel-content.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * Prefix for asset folder
   */
  ASSETS_PREFIX: string = '../../assets/carousel/home/';

  /**
   * Id for the carousel
   */
  pageName: PagesNameEnum = PagesNameEnum.HOME;

  /**
   * Content of the carousel
   */
  carouselContent: string[];

  constructor(private carouselContentService: CarouselContentService,
    private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle(PagesNameEnumFR.HOME);
    this.carouselContent = this.computeCarouselContent(this.getCarouselContent());
  }

  /**
   * Fetch data from carousel service
   * @return The date fetched from the service
   */
  getCarouselContent(): string[] {
    return this.carouselContentService.getCarouselContent(this.pageName);
  }

  /**
   * Compute image names fetched with the prefix
   * @param carouselContent The data fetched
   * @return The data fetched with the prefix
   */
  computeCarouselContent(carouselContent: string[]): string[] {
    let _carouselContent: string[] = [];
    for (let [_i, content] of carouselContent.entries()) {
      _carouselContent[_i] = this.ASSETS_PREFIX + content;
    }
    return _carouselContent;
  }
}
