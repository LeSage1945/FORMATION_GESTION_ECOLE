import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErreurService {

  constructor() { }

  stautError(error: any): void {
    if (error.status !== 200) {
      alert('Votre solde est insuffisant, merci de créditer votre compte en envoyant 100 FCFA par MOMO au 065199181 ou Airtel Money afin de consulter les notes');
    } else {
      alert('Une erreur s\'est produite : ' + error.message);
    }
  }
}
