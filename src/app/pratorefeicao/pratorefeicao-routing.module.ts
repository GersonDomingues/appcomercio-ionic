import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratorefeicaoPage } from './pratorefeicao.page';

const routes: Routes = [
  {
    path: '',
    component: PratorefeicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratorefeicaoPageRoutingModule {}
