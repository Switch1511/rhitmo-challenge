import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenanciesComponent } from './tenancies.component';
import { TenanciesRoutingModule } from './tenancies.routing.module';
import { BreadcumbModule } from '../../shared/components';
import { TabsModule } from '../../shared/components';


@NgModule({
  declarations: [
    TenanciesComponent
  ],
  imports: [
    CommonModule,
    TenanciesRoutingModule,
    BreadcumbModule,
    TabsModule
  ],
  exports: [
    TenanciesComponent
  ]
})
export class TenanciesModule { }
