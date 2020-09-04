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

import {
  AvailabilitiesComponent
} from './availabilities/availabilities.component';

// Angular modules
import {
  NgModule 
} from '@angular/core';

// Custom modules
import {
  FeaturesRoutingModule
} from './features-routing-routing.module'

import {
  SharedModule
} from './../shared/shared.module';

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
    VisitComponent,
    AvailabilitiesComponent,
  ],
  imports: [
    FeaturesRoutingModule,
    SharedModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class FeaturesModule { }
