import { Injectable } from '@angular/core';
import { Razas } from '../models/razas';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazasService {

  headers = new HttpHeaders()
  .set('content-type', 'application/json')

  URL_API = 'http://localhost:8000/api/razas'  


  selectedRaza: Razas = {

    Caracteristicas:'',
    Nombre:'',
    LugarOrigen:'' 
    }
    razas : Razas[];

  constructor(public http: HttpClient) {
    this.razas = [];
   }

  getRaza(){
    return this.http.get<Razas[]>(this.URL_API);
    
  }


}
