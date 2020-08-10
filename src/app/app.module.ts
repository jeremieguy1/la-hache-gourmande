// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

// Interceptor
import { HttpInterceptorService } from './http-interceptor.service';
import { FeaturesModule } from './features/features.module'

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, FeaturesModule
  ],

  providers: [ ...httpInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
