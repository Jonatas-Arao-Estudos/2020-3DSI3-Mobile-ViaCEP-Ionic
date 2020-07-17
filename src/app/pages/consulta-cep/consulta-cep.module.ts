import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaCEPPageRoutingModule } from './consulta-cep-routing.module';

import { ViaCEPService } from '../../service';

import { ConsultaCEPPage } from './consulta-cep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConsultaCEPPageRoutingModule
  ],
  declarations: [ConsultaCEPPage],
  providers: [
    ViaCEPService
  ]
})
export class ConsultaCEPPageModule {}
