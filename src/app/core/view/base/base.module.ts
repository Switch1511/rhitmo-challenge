import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BaseComponent } from './base.component';

import {
  SidebarModule,
} from '../../shared/components';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
  ],
  exports: [
    BaseComponent
  ]
})
export class BaseModule { }
