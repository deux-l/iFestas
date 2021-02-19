import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from '../model/produto';

const URL = 'http://localhost:3007/produto';
@Injectable({
  providedIn: 'root'
})
export class CadprodutoService {

  constructor(private http: HttpClient) { }

  public gravarProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${URL}`, produto);
  }

   public buscarProdutos(idUsuario: any){
    return this.http.get<Produto[]>(`${URL}/${idUsuario}`)
  }
}
