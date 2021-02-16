import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './../model/usuario';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  usuarios: Usuario[] = [];
  email: any;
  senha: any;
  logado = new Usuario();
  autenticar: Usuario = new Usuario();

  constructor(private loginService: LoginService,
              private router: Router) {

                this.usuario = new Usuario();

               }

  ngOnInit(): void {
  }

  public armazenaStorage( usuario: Usuario){
    localStorage.setItem('logado',JSON.stringify(usuario))
  }

 /* buscarUsuario(){
    this.loginService.findAll().subscribe(res => {
      this.usuarios = res;
    })
  }*/

   login(){
      this.loginService.login(this.usuario).subscribe(async res => {
        this.logado = res[0]
        console.log(this.logado)
        if ((this.logado) && (this.logado.email == this.usuario.email && this.logado.senha == this.usuario.senha)
         && (this.logado.email != null && this.logado.senha != null)) {

          this.email = this.usuario.email
          this.armazenaStorage(this.email)

          window.location.reload(await this.router.navigate(['/feed']));
        } else {

          alert('Email ou senha incorretos')
        }

      })

  }



  /*logar(){

     let autenticar = this.usuarios.find(x => x.email === this.usuario.email && x.senha === this.usuario.senha)
      //console.log(autenticar)
     if (autenticar) {

      this.armazenaStorage(this.usuario)
      this.router.navigate(['/feed'])
     } else {
      alert('Email ou senha incorretos')

     }
  }*/
}
