
// Modules
import {
  NgModule 
} from '@angular/core';

import {
  CommonModule 
} from '@angular/common';

// Components
import {
  CoordonneeComponent
} from './../features/coordonnee/coordonnee.component';

import {
  DescriptifComponent
} from './../features/descriptif/descriptif.component';

import {
  HistoireComponent
} from './../features/histoire/histoire.component';

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
  TarifComponent 
} from './../features/tarif/tarif.component';

import {
  VisiteComponent
} from './../features/visite/visite.component';

@NgModule({
  declarations: [
    CoordonneeComponent,
    DescriptifComponent,
    HistoireComponent,
    HomeComponent,
    LesMartisComponent,
    MapComponent,
    NavbarComponent,
    TarifComponent,
    VisiteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class FeaturesModule { }
