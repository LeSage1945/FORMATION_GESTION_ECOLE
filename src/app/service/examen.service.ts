import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { modelResultat } from '../model/modelResultat';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  apiUrl = 'https://cybclient.com/';

  uri='eschool/V1/ServiceExamenGetResultat';

  constructor(
    private http: HttpClient,
    private globaleService: GlobalService
  ) { }

  createxamenGetResultat(ecole: modelResultat){
    const headers= this.globaleService.getmodelHeader()
    return this.http.post(this.apiUrl + this.uri, ecole, {headers})
  }
}
