import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
