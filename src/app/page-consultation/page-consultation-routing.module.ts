import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageConsultationPage } from './page-consultation.page';

const routes: Routes = [
  {
    path: '',
    component: PageConsultationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageConsultationPageRoutingModule {}
