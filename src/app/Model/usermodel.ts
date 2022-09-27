export class Usermodule {
    public id: number;
    public nom: string;
    public prenom: string;
    public password:string;
    public email:string;
    public phone:number;
    public matricule:string;
    public arrondissement:string;
    public genre:string;
  
    constructor(id:number,nom: string,prenom:string, password:string,email:string,phone:number,matriclue:string,genre:string,arrondissement:string) {
      this.id = id;
      this.nom = nom;
      this.prenom=prenom;
      this.password = password;
      this.email = email;
      this.phone=phone;
      this.matricule=matriclue;
      this.genre=genre;
      this.arrondissement=arrondissement;
    }
  }