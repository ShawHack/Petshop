import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListServicoPageRoutingModule } from './list-servico-routing.module';

import { ListServicoPage } from './list-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListServicoPageRoutingModule
  ],
  declarations: [ListServicoPage]
})
export class ListServicoPageModule {}
