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
  cliGenerate = [
    { Scaffold: 'Component', Usage: 'ng generate component [name]', Alias: 'ng g c [name]' },
    { Scaffold: 'Directive', Usage: 'ng generate directive [name]', Alias: 'ng g d [name]' },
    { Scaffold: 'Pipe', Usage: 'ng generate pipe [name]', Alias: 'ng g p [name]' },
    { Scaffold: 'Service', Usage: 'ng generate service [name]', Alias: 'ng g s [name]' },
    { Scaffold: 'Module', Usage: 'ng generate module [name]', Alias: 'ng g m [name]' },
    { Scaffold: 'Guard', Usage: 'ng generate guard [name]', Alias: 'ng g g [name]' },
    { Scaffold: 'Enum', Usage: 'ng generate enum [name]', Alias: 'ng g e [name]' },
    { Scaffold: 'Interface', Usage: 'ng generate interface [name]', Alias: 'ng g i [name]' },
    { Scaffold: 'Class', Usage: 'ng generate class [name]', Alias: 'ng g cl [name]' },
  ];

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
