// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {
  HomeComponent
} from './features/home/home.component';
import {
  VisiteComponent
} from './features/visite/visite.component';
import {
  TarifComponent
} from './features/tarif/tarif.component';
import {
  CoordonneeComponent
} from './features/coordonnee/coordonnee.component';
import {
  DescriptifComponent
} from './features/descriptif/descriptif.component';
import {
  HistoireComponent
} from './features/histoire/histoire.component';
import {
  LesMartisComponent
} from './features/les-martis/les-martis.component';
import {
  MapComponent
} from './features/map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'visite', component: VisiteComponent, pathMatch: 'full'}, // TODO : Enfants
  { path: 'tarif', component: TarifComponent, pathMatch: 'full'}, // TODO : Enfants
  { path: 'coordonnee', component: CoordonneeComponent, pathMatch: 'full'},
  { path: 'descriptif', component: DescriptifComponent, pathMatch: 'full'},
  { path: 'histoire', component: HistoireComponent, pathMatch: 'full' },
  { path: 'les-martis', component: LesMartisComponent, pathMatch: 'full'}, // TODO : Enfants
  { path: 'map', component: MapComponent, pathMatch: 'full'},
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
