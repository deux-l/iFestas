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
  id: number = 0
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

  onChange(event : any) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    if (fileNames.length > 3) {

      alert('número máximo de foto permitidas são 3')
      this.files = undefined;
    } else {

      document.getElementById('customFileLabel')!.innerHTML = fileNames.join(', ');

      this.progress = 0;

    }


  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.cadProdutoService.upload(this.files)
        .subscribe(response => console.log('Upload Concluído'));
    }
  }

  /*public gravarProduto(){

    this.produto.idUsuario = this.id;
    this.cadProdutoService.gravarProduto(this.produto).subscribe(res  =>{
      console.log(res);
      this.produto = new Produto();
    })
  }*/


    /*buscarProdutos(){
    this.cadProdutoService.buscarProdutos().subscribe(res => {
      this.produtos = res;
    })
  }*/
}
