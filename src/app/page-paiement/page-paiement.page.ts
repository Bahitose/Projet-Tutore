import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-page-paiement',
  templateUrl: './page-paiement.page.html',
  styleUrls: ['./page-paiement.page.scss'],
})
export class PagePaiementPage implements OnInit {
  registerform;
  data;
  liste: any;
  infraction: any;
  Nom: any;
  constructor(private navCtrl:NavController,
    private formBuilder:FormBuilder, private apiservice : ApiService,
    private router : Router) { }

  ngOnInit() {
    this.data=JSON.parse(localStorage["Users"])
  this.registerform = this.formBuilder.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    matricule: ['', [Validators.required]],
    automobile: ['', [Validators.required]],
    mode_paiement: ['', [Validators.required]],
    infraction: ['', [Validators.required]],
    numero_carte:['',[Validators.required]]
  });

  this.ListeInfraction();
  }
  facture(){
    const data={
      nom:this.registerform.value.nom,
      prenom: this.registerform.value.prenom,
      matricule:this.registerform.value.matricule,
      automobile:this.registerform.value.automobile,
      mode_paiement:this.registerform.value.mode_paiement,
      numero_carte:this.registerform.value.numero_carte,
      prix:this.infraction.amende,
    }
    return this.apiservice.ajoutfact(data,this.data.id,this.infraction.id).subscribe(result =>{
      console.log("enregister");  
    })
  }
  ListeInfraction(){
    return this.apiservice.listeinf().subscribe(res =>{
      this.liste =res
      console.log(this.liste);
    })
  }
  listeParNom(){
    return this.apiservice.InfationByNom(this.Nom).subscribe(data =>{
      this.infraction = data
      console.log(this.infraction);
    })
  }
}
