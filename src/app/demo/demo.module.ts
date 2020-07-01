import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TdFormComponent } from './td-form/td-form.component';
import { DemoComponent } from './demo.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    TdFormComponent,
    ReactiveFormComponent,
    DemoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DemoRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    NgbPaginationModule,
    NgbAlertModule,
  ]
})
export class DemoModule { }
