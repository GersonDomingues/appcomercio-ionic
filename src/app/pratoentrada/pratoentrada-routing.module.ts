import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratoentradaPage } from './pratoentrada.page';

const routes: Routes = [
  {
    path: '',
    component: PratoentradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratoentradaPageRoutingModule {}
