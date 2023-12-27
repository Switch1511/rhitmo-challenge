import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BaseComponent } from './base.component';

import {
  SidebarModule,
  BreadcumbModule,
  CardsModule,
  TabsModule
} from '../components';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    BreadcumbModule,
    CardsModule,
    TabsModule
  ],
  exports: [
    BaseComponent
  ]
})
export class BaseModule { }
