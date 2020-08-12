// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {
  HomeComponent
} from './features/home/home.component';
import {
  VisitComponent
} from './features/visit/visit.component';
import {
  TariffComponent
} from './features/tariff/tariff.component';
import {
  CoordinateComponent
} from './features/coordinate/coordinate.component';
import {
  DescriptionComponent
} from './features/description/description.component';
import {
  HistoryComponent
} from './features/history/history.component';
import {
  LesMartisComponent
} from './features/les-martis/les-martis.component';
import {
  MapComponent
} from './features/map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'visit', component: VisitComponent, pathMatch: 'full'}, // TODO : Enfants
  { path: 'tariff', component: TariffComponent, pathMatch: 'full'}, // TODO : Enfants
  { path: 'coordinate', component: CoordinateComponent, pathMatch: 'full'},
  { path: 'description', component: DescriptionComponent, pathMatch: 'full'},
  { path: 'history', component: HistoryComponent, pathMatch: 'full' },
  { path: 'les-martis', component: LesMartisComponent, pathMatch: 'full'}, // TODO : Enfants
  { path: 'map', component: MapComponent, pathMatch: 'full'},
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
