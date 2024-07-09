import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { modelEcole } from '../model/modelEcole';

@Injectable({
  providedIn: 'root'
})
export class EcoleService {

  apiUrl = 'https://cybclient.com/';

  uri='eschool/V1/ECOLES';


  constructor(
    private http: HttpClient,
    private globaleService: GlobalService

  ) {}

  public getallecole() {
    const headers = this.globaleService.getmodelHeader()
    return this.http.get(this.apiUrl + this.uri, {headers})

  }
  public getOneEcole(ID:number): Observable<any>{
    const headers= this.globaleService.getmodelHeader()
    console.log(ID);
    
    return this.http.get(this.apiUrl + this.uri + '/' + ID , {headers})
  }

  public edit(ID: number, ecole: modelEcole): Observable<any>{
    const headers= this.globaleService.getmodelHeader()
    return this.http.put(this.apiUrl + this.uri + '/' + ID, ecole, {headers})
  }

  public create(ecole: modelEcole){
    const headers= this.globaleService.getmodelHeader()
    return this.http.post(this.apiUrl + this.uri, ecole, {headers})
  }

  public supprimer(ID: number){
    const headers = this.globaleService.getmodelHeader()
    return this.http.delete(this.apiUrl + this.uri + '/' + ID, {headers})
  }

}
