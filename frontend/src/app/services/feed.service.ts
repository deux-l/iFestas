import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pedido } from './../model/pedido';
import { Produto } from '../model/produto';

const URL = 'http://localhost:3007/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  public buscarTodosProdutos(){
    return this.http.get<Produto[]>(`${URL}`);
  }

  salvarPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`${URL}`, pedido)
  }

  public verificaData(idProduto: any){
    return this.http.get<Pedido[]>(`${URL}/${idProduto}`)
  }
}
