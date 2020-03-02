import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { VisiteComponent } from './component/visite/visite.component';
import { TarifComponent } from './component/tarif/tarif.component';
import { CoordonneeComponent } from './component/coordonnee/coordonnee.component';
import { DescriptifComponent } from './component/descriptif/descriptif.component';
import { HistoireComponent } from './component/histoire/histoire.component';
import { LesMartisComponent } from './component/les-martis/les-martis.component';
import { MapComponent } from './component/map/map.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '/', redirectTo: 'home', pathMatch: 'full' },
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
