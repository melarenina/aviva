import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-nav-menu',
  templateUrl: './fixed-nav-menu.component.html',
  styleUrls: ['./fixed-nav-menu.component.css']
})
export class FixedNavMenuComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  ngOnInit(): void { }

}
