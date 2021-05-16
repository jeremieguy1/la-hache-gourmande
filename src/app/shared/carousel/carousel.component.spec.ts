import {
  CarouselContentService
} from './carousel-content.service';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';


import {
  CarouselComponent
} from './carousel.component';

import
  carouselJSON
from '../../test/content/carousel-content.json'

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let mockCarouselContentService: CarouselContentService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      providers: [ CarouselContentService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockCarouselContentService = TestBed.inject(CarouselContentService);
    mockCarouselContentService.getCarouselContent = jasmine.createSpy().and.returnValue(carouselJSON);

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
