import { Usuario } from './../../model/usuario';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Avaliacao } from './../../model/avaliacao';
import { Produto } from 'src/app/model/produto';
import { ImagemService } from 'src/app/services/imagem.service';
import { UsuarioareaService } from './../../services/usuarioarea.service';

@Component({
  selector: 'app-produtodetalhe',
  templateUrl: './produtodetalhe.component.html',
  styleUrls: ['./produtodetalhe.component.css']
})
export class ProdutodetalheComponent implements OnInit, OnDestroy {

  avaliacoes: Avaliacao[] = [];
  avaliar: Avaliacao;
  avaliacao: Avaliacao;
  totalNotas: Avaliacao = new Avaliacao();
  produto: Produto;
  produtos: Produto[] = []
  usuario: Usuario;
  inscricao: Subscription;
  private id: String = '';
  email: String = '';
  temAvaliacao: String = '';
  total: number = 0;
  valor: number = 0;
  media: number = 0;

  constructor(private imagemService: ImagemService,
              private usuarioareaService: UsuarioareaService,
              private route: ActivatedRoute,
              private router: Router) {
    this.inscricao = new Subscription();
    this.produto   = new Produto();
    this.avaliar = new Avaliacao();
    this.avaliacao = new Avaliacao();
    this.usuario = new Usuario();
              }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
    })

    this.buscarProduto();
    this.buscarAvaliacoes();
    this.buscarUsuario();
  }

  public buscarUsuario(){

    var storage = localStorage.getItem('logado')
    var texto = JSON.stringify(storage)
    var er =/[""\\]/gi;
    texto = texto.replace(er, "")
    this.email= texto
    console.log(this.email)
    this.usuarioareaService.buscaUsuario(this.email).subscribe(res => {
      this.usuario = res[0];
      console.log(this.usuario)
    })
  }

  buscarProduto(){
    this.imagemService.buscarImagens(this.id).subscribe(res => {
      this.produto = res[0];
    });
  }

  buscarAvaliacoes(){
    this.imagemService.buscarAvaliacoes(this.id).subscribe(res => {
      this.avaliacoes = res;


      for (let i = 0; i < this.avaliacoes.length; i++) {

        this.totalNotas   = this.avaliacoes[i];
        this.total  += this.totalNotas.nota
        this.valor += 1;

      }

      if (this.total == 0) {
        this.media = 0;
        this.temAvaliacao = 'Não há avaliações';
      } else {
        this.media =  this.total/this.valor;
        this.temAvaliacao = '';
      }


    })

  }

  salvarAvaliacao(){

      this.avaliacao.idUsuario = this.usuario.idUsuario;
      this.avaliacao.nomeUsuario = this.usuario.nome;
      this.avaliacao.idProduto = this.produto.idProduto;
      this.avaliacao.avaliacao = this.avaliar.avaliacao;
      this.avaliacao.nota = this.avaliar.nota;

    this.imagemService.salvarAvaliacao(this.avaliacao).subscribe(res => {
      console.log(res);
      location.reload();
       })



  }

  ngOnDestroy() {

    this.inscricao.unsubscribe();
  }

}
