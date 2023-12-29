import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenanciesComponent } from './tenancies.component';
import { TenanciesRoutingModule } from './tenancies.routing.module';


@NgModule({
  declarations: [
    TenanciesComponent
  ],
  imports: [
    CommonModule,
    TenanciesRoutingModule
  ],
  exports: [
    TenanciesComponent
  ]
})
export class TenanciesModule { }
