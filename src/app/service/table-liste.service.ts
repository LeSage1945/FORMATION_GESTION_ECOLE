import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableListeService {

  apiUrl = 'https://cybclient.com/';
  uri = '/eschool/V1/ParametreVersListe';

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }

  getListParams(): Observable<any>{
    const headers = this.globalService.getmodelHeader()
    return this.http.get(this.apiUrl + this.uri, {headers})
  }
}
