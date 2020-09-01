import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';

import {
  ImagePageComponent
} from './image-page/image-page.component';

import {
  CarouselComponent
} from './carousel/carousel.component';

import {
  PageHeaderComponent
} from './page-header/page-header.component';

import {
  BoldByNameDirective
} from './directives/bold-by-name.directive';

import {
  StepsComponent
} from './steps/steps.component';

import {
  CardComponent
} from './card/card.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ImagePageComponent,
    PageHeaderComponent,
    BoldByNameDirective,
    StepsComponent,
    CardComponent,
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
    BoldByNameDirective,
    StepsComponent,
    CardComponent
  ],
  providers: [ ]
})
export class SharedModule { }
