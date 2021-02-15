import { NivelAcesso } from './../model/nivelAcesso';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadusuarioService {

  nivelAcesso: NivelAcesso = new NivelAcesso();

  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get<NivelAcesso[]>(`${URL}`)
  }
}
