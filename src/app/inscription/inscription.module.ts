import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InscriptionPageRoutingModule } from './inscription-routing.module';

import { InscriptionPage } from './inscription.page';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    InscriptionPageRoutingModule
  ],
  declarations: [InscriptionPage]
})
export class InscriptionPageModule {}
