import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  data : any
  constructor(private router : Router) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage["Users"])
  }
  deconnecter(){
    localStorage.removeItem('Users')
    this.router.navigate[('home')];
  }

}
