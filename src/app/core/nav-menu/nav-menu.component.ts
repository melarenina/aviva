import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

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
