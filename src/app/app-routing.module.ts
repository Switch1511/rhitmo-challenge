import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tenancies',
    loadChildren: () => import('./core/view/tenancies/tenancies.module').then(m => m.TenanciesModule),
    data: { breadcrumb: 'Tanancies'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
