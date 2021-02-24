import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pedido } from '../../model/pedido';
import { PedidosService } from '../../services/pedidos.service';
import { UsuarioareaService } from '../../services/usuarioarea.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  email: String = '';
  id: any;
  pedidos: Pedido[] = [];
  usuario: Usuario;
  inscricao: Subscription = new Subscription();

  constructor(private pedidosService: PedidosService,
              private usuarioareaService: UsuarioareaService,
              private route: ActivatedRoute) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
         this.id = params['id'];

      });

    this.buscarUsuario();
  }

  buscarUsuario(){

    var storage = localStorage.getItem('logado')
    var texto = JSON.stringify(storage)
    var er =/[""\\]/gi;
    texto = texto.replace(er, "")
    this.email= texto
    this.usuarioareaService.buscaUsuario(this.email).subscribe(res => {
      this.usuario = res[0];
      console.log(this.usuario);

    })

    this.pedidosService.fornecedorPedidos(this.id).subscribe(res => {
      this.pedidos = res;
      console.log(res)
    })
  }

}