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
  LocationComponent
} from './../features/location/location.component';

import {
  NavbarComponent
} from './../features/navbar/navbar.component';

import {
  PricesComponent 
} from './../features/prices/prices.component';

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
    LocationComponent,
    NavbarComponent,
    PricesComponent,
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
