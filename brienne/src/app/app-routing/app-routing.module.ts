import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { WeatherComponent } from '../weatherComp/weather/weather.component';
import { WesterosComponent } from '../westeros/westeros.component';


const appRoutes: Routes = [
  {path: 'today', component: WeatherComponent},
  {path: 'westeros', component: WesterosComponent},

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
