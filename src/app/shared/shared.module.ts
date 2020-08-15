import { CarouselComponent } from './carousel/component/carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePageComponent } from './image-page/image-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CarouselComponent,
    ImagePageComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CarouselComponent,
    ImagePageComponent,
    CommonModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
