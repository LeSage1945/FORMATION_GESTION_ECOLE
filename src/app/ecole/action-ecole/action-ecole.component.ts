import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Falsy } from 'rxjs';
import { modelDepartement } from 'src/app/model/modelDepartement';
import { modelEcole } from 'src/app/model/modelEcole';
import { EcoleService } from 'src/app/service/ecole.service';
import { TableListeService } from 'src/app/service/table-liste.service';

@Component({
  selector: 'app-action-ecole',
  templateUrl: './action-ecole.component.html',
  styleUrls: ['./action-ecole.component.scss']
})
export class ActionEcoleComponent {
  @Input() action!: 'edit' | 'view'| 'create'

  IDECOLES!: number
  CodeEtab!: string
  Ar_NomEcole!: string
  Fr_NomEcole!: string
  Ar_Adresse!: string
  Fr_Adresse!: string
  CodeEcoleDEC!: string
  Telephone!: string
  NomPrenomResponsable!: string
  QualiteResponsable!: string
  TelephoneResponsable!: string
  Fr_Ville!: string
  Departement!: string
  Ar_Commune!: string
  Commune!: string
  Arrondissement!: string
  IdentifiantEtab!: string
  NbEleves!: number
  Cycle_Prescolaire: boolean = false
  Cycle_Primaire: boolean = false
  Cycle_College: boolean = false
  Cycle_Lycee: boolean = false
  Cycle_Superieur: boolean = false
  Courriel!: string
  NumInscriptionDernier!: number
  IDINSPECTIONS!: number
  IDCENTRE_EXAMEN!: number
  PositionGPS!: string
  CodeDepartement!: string
  Nature!: number
  IDZone!: number
  IDDEPARTEMENT!: number
  IDARRONDISSEMENT!: number
  IDQUARTIER!: number
  NomArrondissement!: string
  NomDepartement!: string
  NomZone!: string
  NomQuartier!: string
  CodeCompte!: string
  CODE_ECOLE?: string
  ANNEE?:number
  IDENTIFIANT?:string
  CLE_API?:string
  UTILISATEUER_LOGIN?:string
  UTILISATEUER_TOKEN?:string
  ACTION?:number
  TYPE_UTILISATEUR?:number
  MontantTimbreFacture?: number

  tbDepartement!: modelDepartement[];
  isLoadingParamsList!: boolean; 
  isloandingBtnCreateEcole!: boolean;
  isloadinPage!: boolean



    constructor(
      private paramsService: TableListeService,
      private ecoleService: EcoleService,
      private route: ActivatedRoute,
      private router: Router
    ){}

    ngOnInit(){
      const action = this.route.snapshot.params['action']
      const IDECOLE = this.route.snapshot.params['IDECOLE']
      this.action = action
      console.log(IDECOLE);
      console.log(action);
      
      
      if((action == 'view') || (action == 'edit')){
        this.IDECOLES = IDECOLE
        this.initForm(IDECOLE);
      }
      this.getParamsList();
    }

    getParamsList(){
      this.isLoadingParamsList = true
      this.paramsService.getListParams().subscribe((data) =>{
        console.log(data);
        this.tbDepartement = data.DEPARTEMENT
        this.isLoadingParamsList = false;
      })
    }

    // fonction pour initialiser le formulair
    initForm(IDECOLE: number){
      console.log(IDECOLE);
      
      this.isloadinPage = true
      this.ecoleService.getOneEcole(IDECOLE).subscribe((data) =>{
        console.log(data);
        this.isloadinPage = false
        this.IDECOLES = data.IDECOLES
        this.CodeEtab = data.CodeEtab
        this.Ar_NomEcole = data.Ar_NomEcole
        this.Fr_NomEcole = data.Fr_NomEcole
        this.Ar_Adresse = data.Ar_Adresse
        this.Fr_Adresse = data.Fr_Adresse
        this.CodeEcoleDEC = data.CodeEcoleDEC
        this.Telephone = data.Telephone
        this.NomPrenomResponsable = data.NomPrenomResponsable
        this.QualiteResponsable = data.QualiteResponsable
        this.TelephoneResponsable = data.TelephoneResponsable
        this.Fr_Ville = data.Fr_Ville
        this.Departement = data.Departement
        this.Ar_Commune = data.Ar_Commune
        this.Commune = data.Commune
        this.Arrondissement = data.Arrondissement
        this.IdentifiantEtab = data.IdentifiantEtab
        this.NbEleves = data.NbEleves
        this.Cycle_Prescolaire = data.Cycle_Prescolaire
        this.Cycle_Primaire = data.Cycle_Primaire
        this.Cycle_College = data.Cycle_College
        this.Cycle_Lycee = data.Cycle_Lycee
        this.Cycle_Superieur = data.Cycle_Superieur
        this.Courriel = data.Courriel
        this.NumInscriptionDernier = data.NumInscriptionDernier
        this.IDINSPECTIONS = data.IDINSPECTIONS
        this.IDCENTRE_EXAMEN = data.IDCENTRE_EXAMEN
        this.PositionGPS = data.PositionGPS
        this.CodeDepartement = data.CodeDepartement
        this.Nature = data.Nature
        this.IDZone = data.IDZone
        this.IDDEPARTEMENT = data.IDDEPARTEMENT
        this.IDARRONDISSEMENT = data.IDARRONDISSEMENT
        this.IDQUARTIER = data.IDQUARTIER
        this.NomArrondissement = data.NomArrondissement
        this.NomDepartement = data.NomDepartement
        this.NomZone = data.NomZone
        this.NomQuartier = data.NomQuartier
        this.MontantTimbreFacture = data.MontantTimbreFacture
      })
    }

    selectDepartement(event: any){
      // target.value) : permet de recuperer la valeur de l'element clique dans le formulaire le resultat vient en chaine de carractere
      console.log(event.target.value);
      // Number : permet de convertir la chaine de carrectere en numbre
      this.IDDEPARTEMENT = Number(event.target.value)
    }

    onSubmitForm(form: NgForm){
      this.isloandingBtnCreateEcole = true
      const ecole: modelEcole = form.value
      console.log(ecole);
      if(this.action === 'edit'){
        console.log(this.IDECOLES);
        this.ecoleService.edit(this.IDECOLES, ecole).subscribe((data) =>{
          console.log(data);
          this.router.navigateByUrl('ecole')
          this.isloandingBtnCreateEcole = false
        })
      }else{
        this.ecoleService.create(ecole).subscribe((data) =>{
          console.log(data);
          this.isloandingBtnCreateEcole = false
          this.router.navigateByUrl('ecole')
        })
      }
    }

}
