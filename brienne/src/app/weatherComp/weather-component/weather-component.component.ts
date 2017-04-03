import { Component, OnInit } from '@angular/core';
import { WeatherServiceService} from '../weather-service.service'


@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponentComponent implements OnInit {

  weatherData: any;
 
  constructor(weatherService: WeatherServiceService) {
    /*console.log(weatherService.weather);*/
    weatherService.getWeather().subscribe(data => {console.log(data);this.weatherData = data; });
   }


  ngOnInit() {
    
  }




}
