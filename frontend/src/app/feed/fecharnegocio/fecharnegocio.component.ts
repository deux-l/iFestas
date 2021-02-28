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
  verificaPedidos: Pedido[]= [];
  dados: Pedido[] = [];
  disponibilidade: boolean = false;
  igual: boolean = true;
  match: boolean = false;
  produto: Produto;
  usuario: Usuario;
  inscricao: Subscription;
  email: String = '';
  hoje: Date = new Date();
  agora: Date = new Date();
  dataEntregaIgual: Date = new Date();
  dataDevolucaoIgual: Date = new Date();
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

    //this.buscarProduto();
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


      this.imagemService.buscarImagens(this.id).subscribe(res => {
        this.produto = res[0];


        if (this.usuario.nivelAcesso == 2) {
          this.pedido.valor = this.produto.valor - (this.produto.valor * 0.05)
        } else {
          this.pedido.valor = this.produto.valor
        }
      });



    })



  }

 /* buscarProduto(){
    this.imagemService.buscarImagens(this.id).subscribe(res => {
      this.produto = res[0];
      console.log(this.produto);
    });
  }*/

  verificaData(){
    this.feedService.verificaData(this.id).subscribe(async res => {
      this.verificaPedidos = res;
      console.log(this.verificaPedidos)
      var pedidoEntrega = new Date(`'${this.pedido.dataEntrega}'`);
      var pedidoDevolucao = new Date(`'${this.pedido.dataDevolucao}'`)
      /*var dataEntrega = new Date(`'${this.verificaPedidos[2].dataEntrega}'`);
      var dataDevolucao = new Date(`'${this.verificaPedidos[2].dataDevolucao}'`)
      console.log(dataEntrega)
      console.log(dataDevolucao)*/

      if (pedidoEntrega.getTime() < this.hoje.getTime() && pedidoDevolucao.getTime() < this.hoje.getTime() ||  pedidoDevolucao.getTime() <= pedidoEntrega.getTime()
        || pedidoEntrega.getTime() < this.hoje.getTime() && pedidoDevolucao.getTime() > pedidoEntrega.getTime()) {

        this.disponibilidade = false;
        alert('Data indisponível')

       await location.reload()

        }else{

          this.verificaPedidos.forEach(element => {

            var dataEntrega = new Date(`'${element.dataEntrega}'`);
            var dataDevolucao = new Date(`'${element.dataDevolucao}'`)

            if (pedidoEntrega.getTime() == dataEntrega.getTime()  && pedidoDevolucao.getTime() == dataDevolucao.getTime()) {
               this.igual = false;

            }

          });

          for (let index = 0; index < this.verificaPedidos.length || this.disponibilidade == false; index++) {
            var dataEntrega = new Date(`'${this.verificaPedidos[index].dataEntrega}'`);
            var dataDevolucao = new Date(`'${this.verificaPedidos[index].dataDevolucao}'`)
            console.log(dataDevolucao);
            console.log(pedidoDevolucao)
            if ((pedidoEntrega.getTime() < dataEntrega.getTime() && pedidoDevolucao.getTime() < dataEntrega.getTime()) || (pedidoEntrega.getTime() > dataDevolucao.getTime() && pedidoDevolucao.getTime() > pedidoEntrega.getTime()
                || dataEntrega.getTime() == null && dataDevolucao.getTime() == null)){

              this.disponibilidade = true;

            }else{
              this.disponibilidade = false;
              alert('Data indisponível');
              location.reload()

            }

          }


          //this.igual = true;
          if (this.disponibilidade && this.igual) {
            this.match = true;
          } else {
            this.match = false;
          }

          console.log( this.disponibilidade)
          console.log( this.igual)

          this.disponibilidade = false;
          this.igual = true;
          this.verificaPedidos= [];

        }





          /*for (let index = 0; index < this.verificaPedidos.length || this.disponibilidade == false; index++) {
            var dataEntrega = new Date(`'${this.verificaPedidos[index].dataEntrega}'`);
            var dataDevolucao = new Date(`'${this.verificaPedidos[index].dataDevolucao}'`)
            console.log(dataDevolucao);
            console.log(pedidoDevolucao)
            if ((pedidoEntrega.getTime() < dataEntrega.getTime() && pedidoDevolucao.getTime() < dataEntrega.getTime()) || (pedidoEntrega.getTime() > dataDevolucao.getTime() && pedidoDevolucao.getTime() > pedidoEntrega.getTime())){

              this.disponibilidade = true;

            }else{
              this.disponibilidade = false;
            }

          }*/




      /*console.log(pedidoEntrega.getTime())
      console.log(dataEntrega.getTime())
      console.log(pedidoDevolucao.getTime())
      console.log(dataDevolucao.getTime())*/

     /*
      for (let index = 0; index < this.verificaPedidos.length; index++) {
          var dataEntrega = new Date(`'${this.verificaPedidos[index].dataEntrega}'`);
          var dataDevolucao = new Date(`'${this.verificaPedidos[index].dataDevolucao}'`)

        if (pedidoEntrega.getDate() == dataEntrega.getDate() && pedidoDevolucao.getDate() == dataDevolucao.getDate()) {
          //alert('Data indisponível');
         this.igual = false
        }else{

        }


      }*/


      //console.log(this.disponibilidade)




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

  public verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  public aplicaCssErro(campo: any){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
      };

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
    //this.pedido.valor = this.produto.valor;
    this.pedido.idFornecedor = this.produto.idUsuario;

    //this.pedido.
    this.feedService.salvarPedido(this.pedido).subscribe(res => {
      if (res) {
        this.router.navigate(['feed'])
      }
      console.log(res);
    })
  }

}
