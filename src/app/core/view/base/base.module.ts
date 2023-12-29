import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BaseComponent } from './base.component';

import {
  SidebarModule,
  BreadcumbModule,
  CardsModule
} from '../../shared/components';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    BreadcumbModule,
    CardsModule,
  ],
  exports: [
    BaseComponent
  ]
})
export class BaseModule { }
