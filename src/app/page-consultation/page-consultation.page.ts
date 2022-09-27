import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-page-consultation',
  templateUrl: './page-consultation.page.html',
  styleUrls: ['./page-consultation.page.scss'],
})
export class PageConsultationPage implements OnInit {

  Liste: any;
  data: any;
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage["Users"]);
    this.ListeConsultation();
  }

  ListeConsultation(){
    return this.apiservice.listconsult(this.data.id).subscribe(res =>{
      this.Liste = res
    })
  }
}
