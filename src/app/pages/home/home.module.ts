import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuPage } from '../menu/menu.page';
import { GraficosPage } from '../graficos/graficos.page';
import { CardsPage } from '../cards/cards.page';
import { CardsUsuarioPage } from '../cards-usuario/cards-usuario.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MenuPage, GraficosPage,CardsPage,CardsUsuarioPage, MenuPage]
})
export class HomePageModule {}
