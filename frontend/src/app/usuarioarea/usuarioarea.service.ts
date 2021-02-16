import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuario } from './../model/usuario';

const URL = 'http://localhost:3007/logar';

@Injectable({
  providedIn: 'root'
})
export class UsuarioareaService {

  constructor(private http: HttpClient) { }

  public buscaUsuario(email : any){
    return this.http.get<Usuario[]>(`${URL}/${email}`);
  }
}
