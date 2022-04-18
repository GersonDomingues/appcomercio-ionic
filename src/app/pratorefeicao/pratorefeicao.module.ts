import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratorefeicaoPageRoutingModule } from './pratorefeicao-routing.module';

import { PratorefeicaoPage } from './pratorefeicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratorefeicaoPageRoutingModule
  ],
  declarations: [PratorefeicaoPage]
})
export class PratorefeicaoPageModule {}
