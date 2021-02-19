import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ifestas';

  autenticado: any;
  storage: boolean = false;

  constructor(private authenticationService: AuthenticationService){

  }

  ngOnInit(){
    this.autenticado = this.authenticationService.estaLogado();
    console.log(this.autenticado)
  }

  /*estaAutenticado(){

    let autenticar  = localStorage.getItem('logado');
    this.autenticado = autenticar;

}*/
  logout(){
    this.authenticationService.logout();
   }

}
