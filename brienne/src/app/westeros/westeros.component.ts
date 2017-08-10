import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet'

@Component({
  selector: 'app-westeros',
  templateUrl: './westeros.component.html',
  styleUrls: ['./westeros.component.css']
})
export class WesterosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var westerosMap = L.map('westerosMap').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(westerosMap);
  }

}
