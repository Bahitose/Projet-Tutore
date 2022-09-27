import { Component, OnInit } from '@angular/core';
import { AlertController, AlertOptions, NavController } from '@ionic/angular';
import { BACKDROP } from '@ionic/core/dist/types/utils/overlays';
import { Button } from 'protractor';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-page-infraction',
  templateUrl: './page-infraction.page.html',
  styleUrls: ['./page-infraction.page.scss'],
})
export class PageInfractionPage implements OnInit {

  List: any

  constructor(public navCtrl:NavController,private AlertCtrl:AlertController,private apiservice: ApiService) { }

  ngOnInit() {
    this.ListeInfraction();
  }

  async AltApcon(head : string, message: string) {
    const alert = await this.AlertCtrl.create({
      
      header: head,
      message: message,
      buttons: ['Compris']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  ListeInfraction(){
    return this.apiservice.listeinf().subscribe(res =>{
      this.List = res
    })
  }

}
