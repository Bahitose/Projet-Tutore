import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePaiementPageRoutingModule } from './page-paiement-routing.module';

import { PagePaiementPage } from './page-paiement.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PagePaiementPageRoutingModule
  ],
  declarations: [PagePaiementPage]
})
export class PagePaiementPageModule {}
