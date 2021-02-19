import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CadprodutoService } from '../../services/cadproduto.service';
import { Produto } from './../../model/produto';

@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.component.html',
  styleUrls: ['./cadproduto.component.css']
})
export class CadprodutoComponent implements OnInit {

  produto: Produto;
  produtos: Produto[] =[];
  inscricao: Subscription = new Subscription;
  id: number = 0;
  files: Set<File> | undefined;
  progress = 0;

  constructor(private cadProdutoService: CadprodutoService,
              private route: ActivatedRoute) {
    this.produto = new Produto();
   }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

      })

  }


  public gravarProduto(){

    this.produto.idUsuario = this.id;
    this.cadProdutoService.gravarProduto(this.produto).subscribe(res  =>{
      console.log(res);
      this.produto = new Produto();
    })
  }


    /*buscarProdutos(){
    this.cadProdutoService.buscarProdutos().subscribe(res => {
      this.produtos = res;
    })
  }*/
}
