import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenanciesComponent } from './core/view/tenancies/tenancies.component';

const routes: Routes = [
  {
    path: 'tenancies', // Caminho da rota
    component: TenanciesComponent, // Componente a ser carregado
    data: { breadcrumb: 'Tanancies' } // Dados adicionais, se necessário
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
