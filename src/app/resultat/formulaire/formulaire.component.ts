import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExamenService } from 'src/app/service/examen.service';
import { modelResultat } from 'src/app/model/modelResultat';
import { ErreurService } from 'src/app/erreurGlobal/erreur.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent {
  mobile: any;
  matricule: any;
  message!: string
  isLoading!: boolean;
  data!: any

  constructor(
    private service: ExamenService,
    private statutErreur: ErreurService
  ){}

  ngOnInit(){
  }

  onSubmitForm(form: NgForm){
    // this.isLoading = true
    const resultat: modelResultat = form.value
    console.log(resultat);    
    this.service.createxamenGetResultat(resultat).subscribe((data) =>{
      console.log(data);
      this.data = data
      // this.isLoading = false
    },
    (error) =>{
      this.statutErreur.stautError(error)
    }
  )
    
  }
}
