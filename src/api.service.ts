import { Injectable,Output,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://localhost:8080/api/";
  constructor(public http:HttpClient) { }

  login(mail:string,password){
    return this.http.get(this.url+"users/login/"+mail +"/"+password)
  }

  listconsult(id:number){
    return this.http.get(this.url+"facture/list/"+ id)
  }
  ajoutfact(facture:any, id_users:number, id_inf:number){
    return this.http.post(this.url+"facture/add/"+id_users+"/"+id_inf,facture)
  }
  listeinf(){
    return this.http.get(this.url+"infraction/liste")
  }
  InfationByNom(nom : string){
    return this.http.get(this.url+"infraction/GetByNom/"+nom)
  }

}
