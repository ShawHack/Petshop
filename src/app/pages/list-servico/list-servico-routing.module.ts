import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListServicoPage } from './list-servico.page';

const routes: Routes = [
  {
    path: '',
    component: ListServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListServicoPageRoutingModule {}
