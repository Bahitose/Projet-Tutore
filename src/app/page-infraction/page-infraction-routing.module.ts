import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageInfractionPage } from './page-infraction.page';

const routes: Routes = [
  {
    path: '',
    component: PageInfractionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageInfractionPageRoutingModule {}
