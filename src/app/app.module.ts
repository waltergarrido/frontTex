import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ApiModule, BASE_PATH } from 'src/service/swaggerbillingAPI';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ApiModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: BASE_PATH, useValue: environment.basePath
    },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
