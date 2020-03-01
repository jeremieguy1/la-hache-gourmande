// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { VisiteComponent } from './component/visite/visite.component';
import { TarifComponent } from './component/tarif/tarif.component';
import { CoordonneeComponent } from './component/coordonnee/coordonnee.component';
import { DescriptifComponent } from './component/descriptif/descriptif.component';
import { HistoireComponent } from './component/histoire/histoire.component';
import { LesMartisComponent } from './component/les-martis/les-martis.component';
import { MapComponent } from './component/map/map.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisiteComponent,
    TarifComponent,
    CoordonneeComponent,
    DescriptifComponent,
    HistoireComponent,
    LesMartisComponent,
    MapComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
