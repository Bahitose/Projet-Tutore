import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navCtrl:NavController) {}

  showhome():void{
    this.navCtrl.navigateForward('/acceuil');
  }
  showcontact():void{
    this.navCtrl.navigateForward('/contact');
  }
  showaide():void{
    this.navCtrl.navigateForward('/aide');
  }
  showpprofil():void{
    this.navCtrl.navigateForward('/profil');
  }
}