// Angular modules
import {
  BrowserModule
} from '@angular/platform-browser';

import {
  NgModule
} from '@angular/core';

import {
  AppRoutingModule
} from './app-routing.module';

import {
  HttpClientModule
} from '@angular/common/http';

// Components
import {
  AppComponent
} from './app.component';

// Custom Modules
import {
  FeaturesModule
} from './features/features.module';

import {
  SharedModule
} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
