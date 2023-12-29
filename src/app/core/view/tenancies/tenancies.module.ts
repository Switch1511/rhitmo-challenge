import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenanciesComponent } from './tenancies.component';
import { TenanciesRoutingModule } from './tenancies.routing.module';
import { BreadcumbModule } from '../../shared/components';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    TenanciesComponent
  ],
  imports: [
    CommonModule,
    TenanciesRoutingModule,
    BreadcumbModule,
    MatTabsModule
  ],
  exports: [
    TenanciesComponent
  ]
})
export class TenanciesModule { }
