import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto } from '../model/produto';

const URL = 'http://localhost:3007/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public buscarPorCategoria(categoria: any){
    return this.http.get<Produto[]>(`${URL}/${categoria}`)
  }

}
