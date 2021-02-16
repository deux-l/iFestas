import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuario } from './../model/usuario';

const URL = 'http://localhost:3007/logar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  autenticar: Usuario = new Usuario();

  constructor(private http: HttpClient) {

  }

  public login(usuario: Usuario){
    return this.http.post<Usuario>(`${URL}`, usuario);
  }

  /*public findAll(){
    return this.http.get<Usuario[]>(`${URL}`)
  }*/


}
