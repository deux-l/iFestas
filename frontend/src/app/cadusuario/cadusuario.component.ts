import { Component, OnInit } from '@angular/core';

import { Usuario } from '../model/usuario';
import { CadusuarioService } from './cadusuario.service';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.component.html',
  styleUrls: ['./cadusuario.component.css']
})
export class CadusuarioComponent implements OnInit {

  usuario: Usuario;
  senha: String = '';

  constructor(private cadusuarioService: CadusuarioService) {
    this.usuario = new Usuario();
   }


  ngOnInit(): void {
  }

  public gravarUsuario(){

    if (this.usuario.senha == this.senha && this.usuario.senha.length > 5) {

      this.cadusuarioService.gravarUsuario(this.usuario).subscribe(res =>{
        console.log('Aluno gravado com sucesso');

        console.log(res)
        this.usuario = new Usuario();

      })

    } else {

      alert('Senha não confere ou senha não tem 6 dígitos')
    }

  }
}
