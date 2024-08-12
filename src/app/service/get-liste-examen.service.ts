import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetListeExamenService {

  apiUrl = 'https://cybclient.com/';

  uri='eschool/V1/ServiceExamenGetListeAdmis';

  constructor(
    private http: HttpClient,
    private gobalservice: GlobalService,

  ) { }

  getListeAdmin(listeAdmis: any): Observable<any>{
    const headers = this.gobalservice.getmodelHeader();
    return this.http.post(this.apiUrl + this.uri, listeAdmis, {headers})
  }
}
