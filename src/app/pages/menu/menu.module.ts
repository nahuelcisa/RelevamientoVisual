import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { CardsPage } from '../cards/cards.page';
import { CardsUsuarioPage } from '../cards-usuario/cards-usuario.page';
import { GraficosPage } from '../graficos/graficos.page';
import { HomePage } from '../home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage, CardsPage, CardsUsuarioPage, GraficosPage, HomePage]
})
export class MenuPageModule {}
