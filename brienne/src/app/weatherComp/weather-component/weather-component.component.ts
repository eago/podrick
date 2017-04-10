import { Component, OnInit } from '@angular/core';
import { WeatherServiceService} from '../weather-service.service'


@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponentComponent implements OnInit {

  weatherData: any;
  locationEnabled: boolean = true;
 
  constructor(private weatherService: WeatherServiceService) {
    /*console.log(weatherService.weather);*/
    
   }

  

  ngOnInit() {
    this.getLocation();
  }

  public  getLocation(): void{
    if(!navigator.geolocation) {
      this.locationEnabled =false;
    }

            //TO UNDERSTAND：function.bind(this)
    navigator.geolocation.getCurrentPosition(this.successCallback.bind(this));

  }
  public successCallback(position: Position): void {
    this.locationEnabled = true;
      this.weatherService.getWeather(position.coords).subscribe(data => 
        { console.log(data);
          this.weatherData = data; 
        });
    }
  
    error() {
      console.log('Get position error');
      this.locationEnabled = false;
    }


}
