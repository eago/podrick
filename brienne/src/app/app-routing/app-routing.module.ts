import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { WeatherComponent } from '../weatherComp/weather/weather.component';

const appRoutes: Routes = [
  {path: 'today', component: WeatherComponent},
  {path: '', redirectTo: 'today', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
