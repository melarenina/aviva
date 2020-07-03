import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  }

}
