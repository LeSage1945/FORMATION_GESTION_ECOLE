import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListeAdmisService } from 'src/app/service/liste-admis.service';
import { modelListeEtablissement } from 'src/app/model/modelListeEtablissement';
import { base64_To_PDF } from 'src/app/global/base64_to_pdf'
import { GetListeExamenService } from 'src/app/service/get-liste-examen.service';
import { Router } from '@angular/router';
import { ErreurService } from 'src/app/erreurGlobal/erreur.service';


@Component({
  selector: 'app-liste-etablissement',
  templateUrl: './liste-etablissement.component.html',
  styleUrls: ['./liste-etablissement.component.scss']
})
export class ListeEtablissementComponent {

  CodeEcole!: string
  mobile!: string
  TypeExamen!: string 
  
  base64PDF!: string
  // liste: Array<object> = [];
  isLoading!: boolean;

  data: any
  // data: any[] = [];

  constructor(
    private imprimerservice: ListeAdmisService,
    private getListeService: GetListeExamenService,
    private router: Router,
    private statutErreur: ErreurService
  ){}

  ImprimeListeAdmin(form: NgForm){
    this.isLoading = true
    const liste: modelListeEtablissement = form.value;
    console.log(liste);
    this.imprimerservice.createListeAdmis(liste).subscribe((data) =>{
      console.log(data);
      this.isLoading = false
      this.base64PDF = data.Etat
      console.log(this.base64PDF);
      if(this.base64PDF){
        base64_To_PDF(this.base64PDF)
      }
    },  
    (error) =>{
      this.statutErreur.stautError(error);
    }
  )
  }

  // getListeAdmin(form: NgForm){
  
   
  //   const liste: any = form.value;
  //   console.log(liste);
  //   this.getListeService.getListeAdmin(liste).subscribe((data) =>{
  //   this.router.navigateByUrl('listeAdmis/' + JSON.stringify(data)); 
  //   })
  // }

  getListeAdmin(form: NgForm){
    this.isLoading = true
    const liste: any = form.value;
    console.log(liste);
    this.getListeService.getListeAdmin(liste).subscribe((data) =>{
      this.data = data
      this.isLoading = false
    },
    (error) => {
     this.statutErreur.stautError(error)
    }
  )
  }


}
