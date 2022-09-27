import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageConsultationPageRoutingModule } from './page-consultation-routing.module';

import { PageConsultationPage } from './page-consultation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageConsultationPageRoutingModule
  ],
  declarations: [PageConsultationPage]
})
export class PageConsultationPageModule {}
