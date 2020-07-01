import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subscription: Subscription;
  home = false;
  link = '';

  constructor(private router: Router) {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((event: NavigationStart) => {
    //   this.link = event.url;
    // });
    // console.log(this.link);

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((val: NavigationStart) => {
      this.link = val.url.toString();
      console.log(this.link);
    });
  }


  ngOnInit() {

  }

}
