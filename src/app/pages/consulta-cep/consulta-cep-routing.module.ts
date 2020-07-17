import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaCEPPage } from './consulta-cep.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaCEPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaCEPPageRoutingModule {}
