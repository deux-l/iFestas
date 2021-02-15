import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { CadusuarioService } from './cadusuario.service';

const URL = 'http://localhost:3007/cadusuario';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.component.html',
  styleUrls: ['./cadusuario.component.css']
})

export class CadusuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private cadusuarioService: CadusuarioService,
    private http: HttpClient
    ) {

  }

  ngOnInit(): void {
  }

}























