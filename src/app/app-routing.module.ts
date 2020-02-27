import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.homePageModule)
  },
  {
    path: 'list-produtos',
    loadChildren: () => import('./pages/list-produtos/list-produtos.module').then( m => m.ListProdutosPageModule)
  },
  {
    path: 'list-servico',
    loadChildren: () => import('./pages/list-servico/list-servico.module').then( m => m.ListServicoPageModule)
  },
  {
    path: 'list-usuario',
    loadChildren: () => import('./pages/list-usuario/list-usuario.module').then( m => m.ListUsuarioPageModule)
  },
  {
    path: 'list-empresa',
    loadChildren: () => import('./pages/list-empresa/list-empresa.module').then( m => m.ListEmpresaPageModule)
  },
  {
    path: 'cadastro-produto',
    loadChildren: () => import('./pages/cadastro-produto/cadastro-produto.module').then( m => m.CadastroProdutoPageModule)
  },
  {
    path: 'cadastro-servico',
    loadChildren: () => import('./pages/cadastro-servico/cadastro-servico.module').then( m => m.CadastroServicoPageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./pages/cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'cadastro-empresa',
    loadChildren: () => import('./pages/cadastro-empresa/cadastro-empresa.module').then( m => m.CadastroEmpresaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
