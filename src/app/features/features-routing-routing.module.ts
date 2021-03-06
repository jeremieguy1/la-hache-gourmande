// Components
import {
  LocationComponent
} from './location/location.component';

import {
  LesMartisComponent
} from './les-martis/les-martis.component';

import {
  HistoryComponent
} from './history/history.component';

import {
  DescriptionComponent
} from './description/description.component';

import {
  CoordinateComponent
} from './coordinate/coordinate.component';

import {
  PricesComponent
} from './prices/prices.component';

import {
  VisitComponent
} from './visit/visit.component';

import {
  HomeComponent
} from './home/home.component';

import {
  AvailabilitiesComponent
} from './availabilities/availabilities.component';

import {
  ImagePageComponent
} from './../shared/image-page/image-page.component';

// Angular modules
import {
  NgModule
} from '@angular/core';

import {
  Routes, RouterModule
} from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'visit',
    component: VisitComponent,
    children: [
      { path: '', redirectTo: 'page', pathMatch: 'full' },
      { path: 'page', component: ImagePageComponent, pathMatch: 'full'},
    ]}, 
  { path: 'prices', component: PricesComponent, pathMatch: 'full'},
  { path: 'availabilities', component: AvailabilitiesComponent, pathMatch: 'full'},
  { path: 'coordinate', component: CoordinateComponent, pathMatch: 'full'},
  { path: 'description', component: DescriptionComponent, pathMatch: 'full'},
  { path: 'history', component: HistoryComponent, pathMatch: 'full' },
  { path: 'les-martis',
    component: LesMartisComponent,
    children: [
      { path: '', redirectTo: 'page', pathMatch: 'full' },
      { path: 'page', component: ImagePageComponent, pathMatch: 'full'},
    ]},  
  { path: 'location', component: LocationComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
