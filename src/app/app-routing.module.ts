// Modules
import {
  NgModule
} from '@angular/core';

import {
  Routes, RouterModule
} from '@angular/router';

// Components
import {
  HomeComponent
} from './features/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent, pathMatch: 'full' } // TODO : 404 component
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
