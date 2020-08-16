import {
  Component,
  Input,
  AfterViewInit,
  HostListener,
  OnDestroy,
} from '@angular/core';

import
  bulmaCarousel
from '../../../../../node_modules/bulma-carousel/src/js/index.js';

import {
  BreakpointsEnum
} from '../../../config/breakpoints.enum';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnDestroy {

  @Input() idCarousel: string;

  @Input() carouselContent: string;

  carouselInstance: Object;

  /**
   * Event handler onClick to reset autoplay
   * @param eventTarget The target of the event
   */
  @HostListener('window:click', ['$event.target']) onClick(eventTarget: any) {
    if (eventTarget.classList[0] && eventTarget.classList[0] === 'slider-navigation-next') {
      this.carouselInstance[0].stop();
      this.carouselInstance[0].next();
    } else if (eventTarget.classList[0] && eventTarget.classList[0] === 'slider-navigation-previous') {
      this.carouselInstance[0].stop();
      this.carouselInstance[0].previous();
    }
  }
  constructor() { }

  ngAfterViewInit(): void {
    this.initializeBulmaCarousel();
  }

  /**
   * Set the carousel with settings
   */
  initializeBulmaCarousel(): void {
    this.carouselInstance = bulmaCarousel.attach(`#carousel-${this.idCarousel}`, {
      initialSlide: 1,
			slidesToScroll: 1,
      slidesToShow: 1,
      pagination: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 4000,
      duration: 1000,
      breakpoints: [
        { changePoint: BreakpointsEnum.SM, slidesToShow: 1},
        { changePoint: BreakpointsEnum.MD, slidesToShow: 1}
      ]
		});
  }

  ngOnDestroy(): void {
    window.removeEventListener("click", this.onClick);
  }
}
