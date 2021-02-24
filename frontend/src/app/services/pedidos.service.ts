import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pedido } from './../model/pedido';

const URL = 'http://localhost:3007/pedidos';
const URL2 = 'http://localhost:3007/pedidosc';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  public fornecedorPedidos(idFornecedor: any){
   return this.http.get<Pedido[]>(`${URL}/${idFornecedor}`)
  }

  public clientePedidos(idUsuario: any){
   return this.http.get<Pedido[]>(`${URL2}/${idUsuario}`)
  }
}
