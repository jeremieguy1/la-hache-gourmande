import { CarouselComponent } from './carousel/component/carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
  ]
})
export class SharedModule { }
