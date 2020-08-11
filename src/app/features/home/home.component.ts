import { CarouselContentService } from './../../shared/carousel-content.service';
import { Component, OnInit } from '@angular/core';

import
  bulmaCarousel
from '../../../../node_modules/bulma-carousel/src/js/index.js';
import { CarouselContent } from 'src/app/shared/carousel-content.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ASSETS_PREFIX: string = '../../assets/carousel/home/'

  carouselContent: Array<string>

  constructor(private carouselContentService: CarouselContentService) { }

  ngOnInit(): void {

    this.getCarouselContent();

    bulmaCarousel.attach('#carousel-demo', {
      initialSlide: 2,
			slidesToScroll: 1,
      slidesToShow: 1,
      navigation: true,
      pagination: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 4000,
      duration: 1000,
		});
  }

  getCarouselContent(): void {
    this.carouselContent = 
      this.carouselContentService.getCarouselContent(CarouselContent.HOME);
  }

  computeCarouselContent(): void {
    for (let [_i, content] of this.carouselContent.entries()) {
      this.carouselContent[_i] = this.ASSETS_PREFIX + content;
    }
  }
}
