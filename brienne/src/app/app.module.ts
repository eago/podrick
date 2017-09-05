import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from '@angular/material';
import 'hammerjs';
import { WeatherComponent } from './weatherComp/weather/weather.component';
import { WeatherServiceService} from './weatherComp/weather-service.service';
import { AppRoutingModule } from  './app-routing/app-routing.module';
import { WesterosComponent } from './westeros/westeros.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WesterosComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
