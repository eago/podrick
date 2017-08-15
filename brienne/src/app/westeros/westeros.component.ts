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

  constructor(private http : Http) { }

  ngOnInit() {

/*    var westerosMap = L.map('westerosMap').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(westerosMap);*/
  
  var westerosMap = L.map('westerosMap').setView([0,0],3);

  this.http.get("../../assets/GOT/got.json").
  map(res => this.family = res).catch(error => this.error=error)

  L.tileLayer('../../assets/GOT/{z}/{x}/{y}.png', {
      attribution: 'Game of Thrones',
      maxZoom: 5,
      minZoom: 1,
      noWrap: true,
      crs: L.CRS.Simple
    }).addTo(westerosMap);
  }

}
