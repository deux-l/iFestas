import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../model/usuario';
import { CadusuarioService } from '../services/cadusuario.service';



@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.component.html',
  styleUrls: ['./cadusuario.component.css']
})
export class CadusuarioComponent implements OnInit {

  usuario: Usuario;
  senha: String = '';

  constructor(private cadusuarioService: CadusuarioService,
              private route: Router) {
    this.usuario = new Usuario();
   }


  ngOnInit(): void {
  }

  public gravarUsuario(){

    if (this.usuario.senha == this.senha && this.usuario.senha.length > 5) {

      this.cadusuarioService.gravarUsuario(this.usuario).subscribe(res =>{
        console.log('Aluno gravado com sucesso');
        this.route.navigate(['/login']);

        console.log(res)
        this.usuario = new Usuario();
        this.senha = '';

      })

    } else {

      alert('Senha não confere ou senha não tem 6 dígitos')
    }

  }

  public verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  public aplicaCssErro(campo: any){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
      };

  }

  

  onSubmit(form: any){

    console.log(form);


     }

}
