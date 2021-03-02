import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../../services/categoria.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-brinquedos',
  templateUrl: './brinquedos.component.html',
  styleUrls: ['./brinquedos.component.css']
})
export class BrinquedosComponent implements OnInit {

  private brinquedos: String = 'brinquedos';
  produtos: Produto[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.buscarPorCategoria();
  }

  buscarPorCategoria(){
    this.categoriaService.buscarPorCategoria(this.brinquedos).subscribe(res => {
      this.produtos = res;
      console.log(res);
    });
  }

}
