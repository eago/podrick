import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { WeatherComponent } from '../weatherComp/weather/weather.component';
import { WesterosComponent } from '../westeros/westeros.component';
import { BlogComponent } from '../blog/blog.component';


const appRoutes: Routes = [
  {path: 'today', component: WeatherComponent},
  {path: 'westeros', component: WesterosComponent},
  {path: 'blog', component: BlogComponent},

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
