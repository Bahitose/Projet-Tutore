import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/api.service';
import { first } from 'rxjs/operators';
//import { ToastrService } from './toast';


//import { MustMatch } from './_helpers/must-match.validator';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls:['./inscription.page.scss'],
})


export class InscriptionPage implements OnInit {

  registerform:FormGroup;
  submitted = false;
  constructor(
   // private toastr:ToastrService,
    private router: Router,
    private navCtrl:NavController,
    private formBuilder:FormBuilder, 
    public _apiservice : ApiService) { }

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      name: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      date: ['', [Validators.required]],
      phone: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      mail: ['', [Validators.required, Validators.email]],
      
      matricule: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      arrondissement: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confpassword: ['', [Validators.required]]
  });
  }


  get f() { return this.registerform.controls; }

 
  get email() { return this.registerform.get('mail'); }
  get password() { return this.registerform.get('password'); }
  get name() { return this.registerform.get('name'); }
  get phone() { return this.registerform.get('phone');}
  get prenom() { return this.registerform.get('prenom');}
  get Date() { return this.registerform.get('date');}
  get genre() { return this.registerform.get('genre');}
  get matricule() { return this.registerform.get('matricule');}
  get arrondissement() { return this.registerform.get('arrondissement');}

  
}
