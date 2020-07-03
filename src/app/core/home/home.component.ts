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

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
