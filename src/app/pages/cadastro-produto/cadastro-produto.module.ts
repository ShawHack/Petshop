import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Http , Headers , Response, ResponseOptions} from '@angular/http';
import { IonicModule } from '@ionic/angular';

import { CadastroProdutoPageRoutingModule } from './cadastro-produto-routing.module';

import { CadastroProdutoPage } from './cadastro-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroProdutoPageRoutingModule
  ],
  declarations: [CadastroProdutoPage]
})
export class CadastroProdutoPageModule {}
