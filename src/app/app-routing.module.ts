import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Tenancies',
    loadChildren: () => import('./core/view/tenancies/tenancies.module').then(m => m.TenanciesModule),
    data: { title: 'Tenancies', breadcrumb: 'Pulsus'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
