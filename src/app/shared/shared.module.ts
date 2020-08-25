import {
  CarouselComponent
} from './carousel/carousel.component';

import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  ImagePageComponent
} from './image-page/image-page.component';

import {
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';

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
   LOCALE_ID 
} from '@angular/core';

import {
  registerLocaleData
} from '@angular/common';

import 
  localeFR 
from '@angular/common/locales/fr';
import { CardComponent } from './card/card.component';

registerLocaleData(localeFR);

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
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ]
})
export class SharedModule { }
