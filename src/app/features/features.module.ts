import { SharedModule } from './../shared/shared.module';
// Modules
import {
  NgModule 
} from '@angular/core';

import {
  CommonModule 
} from '@angular/common';

import {
  RouterModule 
} from '@angular/router';

// Components
import {
  CoordinateComponent
} from './../features/coordinate/coordinate.component';

import {
  DescriptionComponent
} from './../features/description/description.component';

import {
  HistoryComponent
} from './../features/history/history.component';

import {
  HomeComponent
} from './../features/home/home.component';

import {
  LesMartisComponent
} from './../features/les-martis/les-martis.component';

import {
  MapComponent
} from './../features/map/map.component';

import {
  NavbarComponent
} from './../features/navbar/navbar.component';

import {
  TariffComponent 
} from './../features/tariff/tariff.component';

import {
  VisitComponent
} from './../features/visit/visit.component';

@NgModule({
  declarations: [
    CoordinateComponent,
    DescriptionComponent,
    HistoryComponent,
    HomeComponent,
    LesMartisComponent,
    MapComponent,
    NavbarComponent,
    TariffComponent,
    VisitComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class FeaturesModule { }
