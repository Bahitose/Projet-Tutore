import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePaiementPage } from './page-paiement.page';

const routes: Routes = [
  {
    path: '',
    component: PagePaiementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePaiementPageRoutingModule {}
