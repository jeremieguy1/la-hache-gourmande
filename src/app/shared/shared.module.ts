import { CarouselComponent } from './carousel/component/carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePageComponent } from './image-page/image-page.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ImagePageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    ImagePageComponent,
    CommonModule,
  ]
})
export class SharedModule { }
