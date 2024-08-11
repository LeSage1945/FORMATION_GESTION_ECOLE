import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListeAdmisService } from 'src/app/service/liste-admis.service';
import { modelListeEtablissement } from 'src/app/model/modelListeEtablissement';

@Component({
  selector: 'app-liste-etablissement',
  templateUrl: './liste-etablissement.component.html',
  styleUrls: ['./liste-etablissement.component.scss']
})
export class ListeEtablissementComponent {

  CodeEcole!: string
  mobile!: number
  TypeExamen!: string 

  constructor(
    private service: ListeAdmisService,
  ){}

  createListeAdmin(form: NgForm){
    const liste: modelListeEtablissement = form.value;
    console.log(liste);
    this.service.createListeAdmis(liste).subscribe((data) =>{
      console.log(data);
    })
  }

  base64PDF: string = '';

  printPDF() {
    if (this.base64PDF) {
      // Décoder la chaîne Base64 en une chaîne binaire
      const byteCharacters = atob(this.base64PDF);
      
      // Convertir la chaîne binaire en un tableau d'octets
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      
      // Créer un Blob à partir du tableau d'octets
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      
      // Créer une URL d'objet pour le Blob
      const url = URL.createObjectURL(blob);
      
      // Ouvrir la nouvelle URL dans un nouvel onglet pour l'impression
      const printWindow = window.open(url);
      if (printWindow) {
        printWindow.onload = () => {
          printWindow.print();
        };
      } else {
        console.error('Impossible d\'ouvrir une nouvelle fenêtre pour l\'impression.');
      }
    } else {
      console.error('La chaîne Base64 du PDF est vide ou non définie.');
    }
  }

}
