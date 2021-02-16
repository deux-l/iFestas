import { Component, OnInit } from '@angular/core';

import { UsuarioareaService } from './usuarioarea.service';
import { Usuario } from './../model/usuario';

@Component({
  selector: 'app-usuarioarea',
  templateUrl: './usuarioarea.component.html',
  styleUrls: ['./usuarioarea.component.css']
})
export class UsuarioareaComponent implements OnInit {

  dados: Usuario = new Usuario();
  usuario: Usuario = new Usuario ();
  email: String = '';
  nome: any;

  constructor(private usuarioareaService: UsuarioareaService) {
    //this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.buscarUsuario();
  }

  public buscarUsuario(){

    var storage = localStorage.getItem('logado')
    var texto = JSON.stringify(storage)
    var er =/[""\\]/gi;
    texto = texto.replace(er, "")
    this.email= texto

    this.usuarioareaService.buscaUsuario(this.email).subscribe(res => {
      this.usuario = res[0];

      //this.usuario.nome = this.dados[0]['nome'];

      //console.log(this.usuario.nome)

    })
    //  converte json para objeto var tarefa = JSON.parse(jsonTarefa);

  }
  exibiNome(){
    return this.usuario.nome;
}

}
