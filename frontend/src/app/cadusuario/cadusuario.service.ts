import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from 'src/app/model/usuario';
import { NivelAcesso } from './../model/nivelAcesso';

const URL = 'http://localhost:3007/criar';

@Injectable({
  providedIn: 'root'
})
export class CadusuarioService {

  constructor(private http: HttpClient) { }

  public gravarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${URL}`, usuario);
}
  public findAll(){
    return this.http.get<NivelAcesso[]>(`${URL}`)
  }
}
