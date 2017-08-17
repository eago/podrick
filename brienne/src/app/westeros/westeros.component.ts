import { Component, OnInit} from '@angular/core';

import {Http, Response} from '@angular/http'

import * as L from 'leaflet'

@Component({
  selector: 'app-westeros',
  templateUrl: './westeros.component.html',
  styleUrls: ['./westeros.component.css']
})
export class WesterosComponent implements OnInit {

  family : any;
  error : any;

  //leaflet map
  westerosMap : any;

  constructor(private http : Http) { }

  ngOnInit() {

/*    var westerosMap = L.map('westerosMap').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(westerosMap);*/
  
  this.westerosMap = L.map('westerosMap').setView([0,0],3);

  //baselayer we need to display in the map
  L.tileLayer('../../assets/GOT/{z}/{x}/{y}.png', {
      attribution: 'Game of Thrones',
      maxZoom: 5,
      minZoom: 1,
      noWrap: true,
      crs: L.CRS.Simple
    }).addTo(this.westerosMap);

    var southWest = this.westerosMap.unproject([200, 6700], this.westerosMap.getMaxZoom());
    var northEast = this.westerosMap.unproject([8000, 1500], this.westerosMap.getMaxZoom());
    this.westerosMap.setMaxBounds(new L.LatLngBounds(southWest, northEast));

    this.westerosMap.on("click", function(e){
      console.log(e.latlng);
    });

    //get json data
    this.http.get("../../assets/GOT/got.json").map(res =>  res.json()).catch(error => this.error=error).subscribe(
      res => this.addMapLayer(res)
    );
  }



  public addMapLayer(data : any) {

    //create custom icon class
    var GotIcon = L.Icon.extend({
      options: {
        iconSize: [40, 40],
        iconAnchor: [40, 40],
        popupAnchor: [-20, -44]
      }
    });

    //variable to store our overlayers
    var overlay = {};

    //read and use json data
    for (var i = 0; i < data.length; i++) {
      var groupChars = [];

      for (var j = 0; j < data[i].chars.length; j++) {

        //create markers belong to different layers with custom icons
        let character = data[i].chars[j];
        let icon = new GotIcon({iconUrl: '../../assets/GOT/images/' + character.iconUrl});
        let desc = character.description;
        let marker = L.marker(character.coords, {icon: icon}).bindPopup(desc);

        groupChars.push(marker);


      }

      var layerGroup = L.layerGroup(groupChars);
      this.westerosMap.addLayer(layerGroup);
      overlay[data[i].layer] = layerGroup;
      
    }

    //create layer control and add overlayers
    L.control.layers(null, overlay).addTo(this.westerosMap);

    
  }

}
