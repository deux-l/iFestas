import { CadprodutoService } from '../services/cadproduto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioareaRoutingModule } from './usuarioarea-routing.module';
import { EditprodutoComponent } from './editproduto/editproduto.component';
import { EditusuarioComponent } from './editusuario/editusuario.component';
import { CadprodutoComponent } from './cadproduto/cadproduto.component';
import { UsuarioareaComponent } from './usuarioarea.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditimagemComponent } from './editimagem/editimagem.component';
import { ImagemService } from '../services/imagem.service';



@NgModule({
  declarations: [
    UsuarioareaComponent,
    CadprodutoComponent,
    EditusuarioComponent,
    EditprodutoComponent,
    EditimagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuarioareaRoutingModule,
    NgxMaskModule.forRoot(),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    CadprodutoService,
    ImagemService
  ]
})
export class UsuarioareaModule { }
