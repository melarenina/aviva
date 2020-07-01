import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { GlobalErrorHandler } from './global-error-handler.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FixedNavMenuComponent } from './fixed-nav-menu/fixed-nav-menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavMenuComponent,
    FooterComponent,
    ErrorComponent,
    NotFoundComponent,
    CarouselComponent,
    FixedNavMenuComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
  ],
  exports: [
    NavMenuComponent,
    FooterComponent,
    CarouselComponent,
    FixedNavMenuComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class CoreModule { }
