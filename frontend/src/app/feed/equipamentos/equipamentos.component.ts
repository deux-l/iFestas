import { Component, OnInit } from '@angular/core';


import { Produto } from '../../model/produto';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent implements OnInit {

  private equipamentos: String = 'equipamentos';
  produtos: Produto[] = [];


  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.buscarPorCategoria();

  }
  buscarPorCategoria(){
    this.categoriaService.buscarPorCategoria(this.equipamentos).subscribe(res => {
      this.produtos = res;
      console.log(res);
    });
  }

}
