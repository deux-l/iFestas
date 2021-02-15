import { Component, OnInit } from '@angular/core';

import { CadusuarioService } from './cadusuario.service';

const URL = 'http://localhost:3007/cadusuario';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.component.html',
  styleUrls: ['./cadusuario.component.css']
})
export class CadusuarioComponent implements OnInit {

  constructor(private cadusuarioService: CadusuarioService) { }

  ngOnInit(): void {
  }


}
