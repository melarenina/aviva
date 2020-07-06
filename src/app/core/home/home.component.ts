import { Component, OnInit, HostListener } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  map: L.Map;
  latitude = -22.874598;
  longitude = -47.128682;
  isScrolled = false;
  isCollapsed = true;

  galeria = [
    '../../../assets/h1.jpg',
    '../../../assets/h2.jpg',
    '../../../assets/h3.jpg',
    '../../../assets/h4.jpg',
    '../../../assets/h5.jpg',
    '../../../assets/h6.jpg',
    '../../../assets/h7.jpg',
    '../../../assets/h8.jpg',
    '../../../assets/h9.jpg',
    '../../../assets/h10.jpg',
    '../../../assets/h11.jpg',
    '../../../assets/h12.jpg'
  ]

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }


  constructor() { }

  ngOnInit(): void {
    this.map = L.map('map', {
      center: [this.latitude, this.longitude],
      zoom: 20,
      renderer: L.canvas()
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const marker = L.marker([this.latitude, this.longitude]);
    // Adding popup to the marker
    marker.bindPopup('R. Antônio Haddad, 185 - Parque Via Norte').openPopup();
    marker.addTo(this.map); // Adding marker to the map

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);

    marker.openPopup();
  }

}
