import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  registerform:FormGroup;
  submitted = false;
  data:any;

  constructor(private navCtrl:NavController,
     private formBuilder:FormBuilder, private apiservice : ApiService,
     private router : Router) {
    
   }
   ngOnInit() {
    this.registerform = this.formBuilder.group({
      mail: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   }
   
   login(){
    return this.apiservice.login(this.registerform.value.mail,this.registerform.value.password).subscribe(donne=>{
      if(donne){
        localStorage.setItem("Users",JSON.stringify(donne))
        this.router.navigate(['acceuil'])
      }
    })
   }
}