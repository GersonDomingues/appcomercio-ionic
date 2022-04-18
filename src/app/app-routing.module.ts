import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lanche',
    loadChildren: () => import('./lanche/lanche.module').then( m => m.LanchePageModule)
  },
  {
    path: 'pratodia',
    loadChildren: () => import('./pratodia/pratodia.module').then( m => m.PratodiaPageModule)
  },
  {
    path: 'pratoentrada',
    loadChildren: () => import('./pratoentrada/pratoentrada.module').then( m => m.PratoentradaPageModule)
  },
  {
    path: 'pratorefeicao',
    loadChildren: () => import('./pratorefeicao/pratorefeicao.module').then( m => m.PratorefeicaoPageModule)
  },
  {
    path: 'sobremesa',
    loadChildren: () => import('./sobremesa/sobremesa.module').then( m => m.SobremesaPageModule)
  },
  {
    path: 'bebida',
    loadChildren: () => import('./bebida/bebida.module').then( m => m.BebidaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
