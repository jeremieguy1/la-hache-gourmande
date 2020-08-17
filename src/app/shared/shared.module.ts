import { CarouselComponent } from './carousel/carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePageComponent } from './image-page/image-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ImagePageComponent,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CarouselComponent,
    ImagePageComponent,
    PageHeaderComponent,
    CommonModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
