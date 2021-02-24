import { Component, OnInit } from '@angular/core';

import { CadprodutoService } from '../../services/cadproduto.service';
import { Produto } from 'src/app/model/produto';
import { Imagens } from './../../model/imagens';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editproduto',
  templateUrl: './editproduto.component.html',
  styleUrls: ['./editproduto.component.css']
})
export class EditprodutoComponent implements OnInit {

  produto: Produto;
  produtos: Produto[] =[];
  imagem1: string = ''
  imagem2: string = ''
  imagem3: string = ''
  imagens: Imagens;
  inscricao: Subscription = new Subscription;

  constructor(private cadProdutoService: CadprodutoService,
              private route: ActivatedRoute,
              private router: Router) {
    this.produto = new Produto();
    this.imagens = new Imagens();
  }

  ngOnInit(): void {
      this.buscarProdutos();
  }

  buscarProdutos(){

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let idUsuario = params['id'];

        this.cadProdutoService.buscarProdutos(idUsuario).subscribe(res => {
          this.produtos = res;

          console.log(this.produtos)

          this.produtos.forEach(valores => {

            this.imagens.imagem1 = `assets\\imagens\\${valores.imagem1}`
            this.imagens.imagem2 = `assets\\imagens\\${valores.imagem2}`
            this.imagens.imagem3 = `assets\\imagens\\${valores.imagem3}`

          });
                   //this.imagem1 = `assets\\imagens\\${this.produto.imagem1}`;



          })

        })
  }

  atualizaProduto(produto: Produto){
    this.cadProdutoService.atualizaProduto(produto).subscribe(res => {
      //console.log(idProduto)
      console.log(res);
      location.reload();
    })
  }

  deletaProduto(idProduto: any){
    this.cadProdutoService.deletaProduto(idProduto).subscribe(async res => {
      console.log(res);
      location.reload();
    })
  }
}
