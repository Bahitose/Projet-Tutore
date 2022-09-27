import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'page-paiement',
    loadChildren: () => import('./page-paiement/page-paiement.module').then( m => m.PagePaiementPageModule)
  },
  {
    path: 'page-consultation',
    loadChildren: () => import('./page-consultation/page-consultation.module').then( m => m.PageConsultationPageModule)
  },
  {
    path: 'page-infraction',
    loadChildren: () => import('./page-infraction/page-infraction.module').then( m => m.PageInfractionPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./menu/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'aide',
    loadChildren: () => import('./menu/aide/aide.module').then( m => m.AidePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./menu/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import('./password/changepass/changepass.module').then( m => m.ChangepassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
