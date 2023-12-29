import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogCreateUnityComponent } from './dialog-create-unity.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DialogCreateUnityComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [
    DialogCreateUnityComponent
  ]
})
export class DialogCreateUnityModule { }
