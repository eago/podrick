import { Injectable } from '@angular/core';


import {Http, Response} from '@angular/http'
/*import { Observable} from 'rxjs/Observable'*/
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class WeatherServiceService {

  error : any;
  weather: any;
  /*private url = "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1"*/
  private url = "http://api.openweathermap.org/data/2.5/weather?lat=48.13&lon=17.12&APPID=a5f2c5d02316cc9c302205db39d5ad11"
  constructor(private http: Http) { }

    public getWeather(coords:Coordinates) : any {
      let latitude = coords.latitude;
      let longitude = coords.longitude;
      return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=de2664bd0c21a2732a213959a414dcf8&units=metric')
      .map(res => res.json())
/*            .subscribe((data) => {this.weather = data, console.log(this.weather)},
            (error) => this.error = error)*/
    
  }

  private handleError (error: Response | any) {

  }

}
