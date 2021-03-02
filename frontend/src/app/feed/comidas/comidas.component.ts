import { Component, OnInit } from '@angular/core';

import { Produto } from '../../model/produto';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {

  private comidas: String = 'comidas';
  produtos: Produto[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.buscarPorCategoria();
  }
  buscarPorCategoria(){
    this.categoriaService.buscarPorCategoria(this.comidas).subscribe(res => {
      this.produtos = res;
      console.log(res);
    });
  }
}
