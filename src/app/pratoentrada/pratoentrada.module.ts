import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratoentradaPageRoutingModule } from './pratoentrada-routing.module';

import { PratoentradaPage } from './pratoentrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratoentradaPageRoutingModule
  ],
  declarations: [PratoentradaPage]
})
export class PratoentradaPageModule {}
