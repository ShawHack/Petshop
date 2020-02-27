import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEmpresaPageRoutingModule } from './cadastro-empresa-routing.module';

import { CadastroEmpresaPage } from './cadastro-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEmpresaPageRoutingModule
  ],
  declarations: [CadastroEmpresaPage]
})
export class CadastroEmpresaPageModule {}
