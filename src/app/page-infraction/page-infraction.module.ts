import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageInfractionPageRoutingModule } from './page-infraction-routing.module';

import { PageInfractionPage } from './page-infraction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageInfractionPageRoutingModule
  ],
  declarations: [PageInfractionPage]
})
export class PageInfractionPageModule {}
