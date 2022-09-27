import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showPaie() :void{
    this.navCtrl.navigateForward('/page-paiement');
  }
  showConsultation():void{
    this.navCtrl.navigateForward('/page-consultation');
  }
  showInsfration(): void{
    this.navCtrl.navigateForward('/page-infraction');
  }
  showContestation():void{
    this.navCtrl.navigateForward('/page-contestation');
  }

}
