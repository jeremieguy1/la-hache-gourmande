import { CarouselContentService } from './../../shared/carousel/carousel-content.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let carouselContentService: CarouselContentService;
  let fixture: ComponentFixture<HomeComponent>;
  let carouselContentServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      providers: [
        CarouselContentService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    carouselContentServiceSpy =
      spyOn(carouselContentService, 'getCarouselContent').and.returnValue(["1", "2"]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the content from service', () => {
    component.getCarouselContent();
    expect(carouselContentServiceSpy).toHaveBeenCalled();
  });

});
