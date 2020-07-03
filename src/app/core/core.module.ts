import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { GlobalErrorHandler } from './global-error-handler.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FixedNavMenuComponent } from './fixed-nav-menu/fixed-nav-menu.component';
import { MapComponent } from './map/map.component';

import { InjectionToken } from '@angular/core';

export const INIT_COORDS = new InjectionToken<{lat: number, long: number}>('INIT_COORDS');

@NgModule({
  declarations: [
    HomeComponent,
    NavMenuComponent,
    FooterComponent,
    ErrorComponent,
    NotFoundComponent,
    CarouselComponent,
    FixedNavMenuComponent,
    MapComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBK2ThX75vI3oCxUH2BL4AVcwgcdMQ2ZsI' }),
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    NavMenuComponent,
    FooterComponent,
    CarouselComponent,
    FixedNavMenuComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: INIT_COORDS, useValue: {lat: -22.874598, long: -47.128682} }
  ]
})
export class CoreModule { }
