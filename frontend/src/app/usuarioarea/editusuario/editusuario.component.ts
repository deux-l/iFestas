import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Usuario } from 'src/app/model/usuario';
import { UsuarioareaService } from '../../services/usuarioarea.service';

@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {

  //usuario: Usuario[] = [];
  valor: Usuario[] = [];
  usuario: Usuario = new Usuario;
  inscricao: Subscription = new Subscription;
  senha: String= '';
  novaSenha: String='';
  form: Form | undefined
  fb: FormGroup | undefined;

  constructor(private usuarioareaService: UsuarioareaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {


    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let email = params['email'];

        this.usuarioareaService.buscaUsuario(email).subscribe(res => {
          this.usuario = res[0];
            console.log(this.usuario)
          //this.usuario.nome = this.dados[0]['nome'];

          //console.log(this.usuario.nome)

        })

      })


  }

  /*buscaDados(){

     this.usuario[0].forEach(valor => {
       console.log(valor)
      this.user = valor;
     });
     console.log(this.user)
     return this.user;
  }*/

  public atualizaUsuario(){

    if (this.usuario.senha == this.senha && this.novaSenha != null && this.novaSenha.length > 5) {

      this.usuario.senha = this.novaSenha

      this.usuarioareaService.atualizaUsuario(this.usuario).subscribe(
        async success => {
          console.log(success)

           alert('Editado com sucesso!')
           window.location.reload(await this.router.navigate(['usuarioarea']));

        }
      )
    } else{
      alert('Não editou')
    }

  }
  /*public buscarUsuario(){

    this.usuarioareaService.buscaUsuario(this.email).subscribe(res => {
      this.usuario = res;

      //this.usuario.nome = this.dados[0]['nome'];

      //console.log(this.usuario.nome)

    })*/


}
