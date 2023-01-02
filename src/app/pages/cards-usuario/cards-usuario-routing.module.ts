import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsUsuarioPage } from './cards-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CardsUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsUsuarioPageRoutingModule {}
