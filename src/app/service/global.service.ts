import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { modelHeader } from '../model/modelHeader';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public getmodelHeader(){
    const header: modelHeader={
      CODE_ECOLE: 'CTP',
      ANNEE: '2022-2023',
      IDENTIFIANT: 'CTP',
      CLE_API: '',
      UTILISATEUER_LOGIN: 'NGOYI MOUSSOUNDA43',
      UTILISATEUER_TOKEN: '352569',
      ACTION: 2,
      TYPE_UTILISATEUR: 3,
    }
    
    return new HttpHeaders( {...header});
  }
}
