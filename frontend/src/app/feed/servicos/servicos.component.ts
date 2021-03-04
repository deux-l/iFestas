import { Component, OnInit } from '@angular/core';

import { Produto } from '../../model/produto';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  private servicos: String = 'servicos';
  produtos: Produto[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.buscarPorCategoria();
  }
  buscarPorCategoria(){
    this.categoriaService.buscarPorCategoria(this.servicos).subscribe(res => {
      this.produtos = res;
      
    });
  }
}
