import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenanciesComponent } from './tenancies.component';
import { TenanciesRoutingModule } from './tenancies.routing.module';
import { BreadcrumbModule } from '../../shared/components';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { TenanciesHeaderComponent } from './components/tenancies-header/tenancies-header.component';
import { UnityCardsComponent } from './components/unity-cards/unity-cards.component';
import { UnityContentComponent } from './components/unity-content/unity-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogCreateUnityModule } from '../../shared/dialogs/dialog-create-unity/dialog-create-unity.module';

@NgModule({
  declarations: [
    TenanciesComponent,
    TenanciesHeaderComponent,
    UnityCardsComponent,
    UnityContentComponent
  ],
  imports: [
    CommonModule,
    TenanciesRoutingModule,
    BreadcrumbModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    DialogCreateUnityModule
  ],
  exports: [
    TenanciesComponent
  ]
})
export class TenanciesModule { }
