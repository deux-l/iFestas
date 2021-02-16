import { Component, Input, OnInit } from '@angular/core';

import { Usuario } from 'src/app/model/usuario';
import { UsuarioareaService } from './../usuarioarea.service';

@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {

  constructor(private usuarioareaservice: UsuarioareaService) { }

  ngOnInit(): void {
  }



}
