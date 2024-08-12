import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { modelListeEtablissement } from '../model/modelListeEtablissement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeAdmisService {

  apiUrl = 'https://cybclient.com/';
  uri= "eschool/V1/ServiceExamenImprimeListeAdmis";

  constructor(
    private http: HttpClient,
    private globaleService: GlobalService
  ) { }

  createListeAdmis(etablissement: modelListeEtablissement): Observable<any>{
    const headers = this.globaleService.getmodelHeader()
    return this.http.post(this.apiUrl + this.uri, etablissement, {headers})
  }
}
