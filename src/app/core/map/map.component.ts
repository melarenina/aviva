import { Component, OnInit, Inject } from '@angular/core';
import * as esri from 'esri-leaflet';
import * as L from 'leaflet';
import { INIT_COORDS } from '../core.module';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map;

  latitude = -22.874598;
  longitude = -47.128682;

  constructor(@Inject(INIT_COORDS) protected _initCoords: {lat: number, long: number}) { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.latitude, this.longitude],
      zoom: 3
    });
  }


}
