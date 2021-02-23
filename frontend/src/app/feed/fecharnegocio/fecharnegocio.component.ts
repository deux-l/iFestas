import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FeedService } from './../../services/feed.service';
import { Produto } from 'src/app/model/produto';
import { Pedido } from './../../model/pedido';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioareaService } from 'src/app/services/usuarioarea.service';
import { ImagemService } from 'src/app/services/imagem.service';

@Component({
  selector: 'app-fecharnegocio',
  templateUrl: './fecharnegocio.component.html',
  styleUrls: ['./fecharnegocio.component.css']
})
export class FecharnegocioComponent implements OnInit {

  pedido: Pedido;
  verificaPedido: Pedido;
  disponibilidade: boolean = false;
  produto: Produto;
  usuario: Usuario;
  inscricao: Subscription;
  email: String = '';
  private id: String = '';

  constructor(private imagemService: ImagemService,
              private usuarioareaService: UsuarioareaService,
              private feedService: FeedService,
              private route: ActivatedRoute,
              private router: Router) {
    this.inscricao = new Subscription();
    this.pedido = new Pedido();
    this.verificaPedido = new Pedido();
    this.produto   = new Produto();
    this.usuario = new Usuario();

  }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
    })

    this.buscarProduto();
    this.buscarUsuario();
    //this.verificaData()

  }

  public buscarUsuario(){

    var storage = localStorage.getItem('logado')
    var texto = JSON.stringify(storage)
    var er =/[""\\]/gi;
    texto = texto.replace(er, "")
    this.email= texto
    this.usuarioareaService.buscaUsuario(this.email).subscribe(res => {
      this.usuario = res[0];
      console.log(this.usuario);

    })
  }

  buscarProduto(){
    this.imagemService.buscarImagens(this.id).subscribe(res => {
      this.produto = res[0];
      console.log(this.produto);
    });
  }

  verificaData(){
    this.feedService.verificaData(this.id).subscribe(res => {
      this.verificaPedido = res[0];
      var dataEntrega = new Date(`'${this.verificaPedido.dataEntrega}'`);
      var dataDevolucao = new Date(`'${this.verificaPedido.dataDevolucao}'`)
       var pedidoEntrega = new Date(`'${this.pedido.dataEntrega}'`);
      var pedidoDevolucao = new Date(`'${this.pedido.dataDevolucao}'`)
      var hoje = new Date();
      //this.pedido.dataEntrega
      //this.pedido.dataDevolucao
      //var date = new Date('2021-2-25')

      /*console.log(dataDevolucao)
      console.log( this.pedido.dataEntrega)
      if (   dataDevolucao < this.pedido.dataEntrega) {
        alert('é menor')
      } else {
        alert('é maior')
      }*/
      //console.log( dataEntrega);
      //console.log( dataDevolucao);
      console.log(dataEntrega)
      console.log( pedidoEntrega)
      console.log(hoje)
      if(!this.verificaPedido.dataEntrega && !this.verificaPedido.dataDevolucao){
        alert('Data indisponível')
        this.disponibilidade = false;

      }else if(pedidoEntrega <= dataEntrega && dataDevolucao <= pedidoDevolucao) {
        alert('Data indisponível')
        this.disponibilidade = false;

      } else if(pedidoEntrega < hoje) {
        alert('Data indisponível')
        this.disponibilidade = false;

      } else if(pedidoEntrega > pedidoDevolucao){
        alert('Data indisponível')
        this.disponibilidade = false;

      } else if(pedidoDevolucao < hoje){
        alert('Data indisponível')
        this.disponibilidade = false;

      }else {
        alert('Data disponível')
        this.disponibilidade = true;
      }

      /*if (this.verificaPedido.dataEntrega != undefined && this.verificaPedido.dataDevolucao != undefined) {

        if ( this.verificaPedido.dataEntrega <= this.pedido.dataEntrega ) {
          alert('Data indisponível')
          //location.reload();
        }else{
          alert('Data indisponível')
          //location.reload();
        }
      }else{
        alert('Data disponível')
        //location.reload();
      }
      //console.log(this.verificaPedido);*/
    })
  }

  salvarPedido(){
    this.pedido.idProduto = this.produto.idProduto;
    this.pedido.idUsuario = this.usuario.idUsuario;
    this.pedido.nomeUsuario = this.usuario.nome;
    this.pedido.nomeProduto = this.produto.nomeProduto;
    this.pedido.tipoNegocio = this.produto.tipoNegocio;
    this.pedido.descricao = this.produto.descricao;
    this.pedido.nivelAcesso = this.usuario.nivelAcesso;
    this.pedido.email = this.usuario.email;
    this.pedido.rua = this.usuario.rua;
    this.pedido.numero = this.usuario.numero;
    this.pedido.bairro = this.usuario.bairro;
    this.pedido.cidade = this.usuario.cidade;
    this.pedido.celular = this.usuario.celular;
    this.pedido.valor = this.produto.valor;

    //this.pedido.
    this.feedService.salvarPedido(this.pedido).subscribe(res => {
      if (res) {
        this.router.navigate(['feed'])
      }
      console.log(res);
    })
  }

}
