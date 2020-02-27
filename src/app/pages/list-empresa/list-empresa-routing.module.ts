import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmpresaPage } from './list-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ListEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEmpresaPageRoutingModule {}
