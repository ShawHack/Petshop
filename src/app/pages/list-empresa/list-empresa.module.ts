import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEmpresaPageRoutingModule } from './list-empresa-routing.module';

import { ListEmpresaPage } from './list-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEmpresaPageRoutingModule
  ],
  declarations: [ListEmpresaPage]
})
export class ListEmpresaPageModule {}
