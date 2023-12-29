import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
