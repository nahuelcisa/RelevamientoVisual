import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsUsuarioPageRoutingModule } from './cards-usuario-routing.module';

import { CardsUsuarioPage } from './cards-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsUsuarioPageRoutingModule
  ],
  declarations: [CardsUsuarioPage]
})
export class CardsUsuarioPageModule {}
