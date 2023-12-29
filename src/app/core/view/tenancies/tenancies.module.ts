import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenanciesComponent } from './tenancies.component';
import { TenanciesRoutingModule } from './tenancies.routing.module';
import { BreadcumbModule } from '../../shared/components';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { TenanciesHeaderComponent } from './components/tenancies-header/tenancies-header.component';
import { UnityCardsComponent } from './components/unity-cards/unity-cards.component';
import { UnityContentComponent } from './components/unity-content/unity-content.component';

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
    BreadcumbModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [
    TenanciesComponent
  ]
})
export class TenanciesModule { }
