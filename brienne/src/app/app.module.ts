import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from '@angular/material';
import 'hammerjs';
import { WeatherComponentComponent } from './weatherComp/weather-component/weather-component.component';
import { WeatherServiceService} from './weatherComp/weather-service.service'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
