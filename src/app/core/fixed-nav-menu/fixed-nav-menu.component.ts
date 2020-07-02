import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-fixed-nav-menu',
  templateUrl: './fixed-nav-menu.component.html',
  styleUrls: ['./fixed-nav-menu.component.css']
})
export class FixedNavMenuComponent implements OnInit {

  isSticky = false;
  isCollapsed = true;
  test = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset > 0;
  }

  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit(): void { }

  collapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.test = !this.test;
  }

}
