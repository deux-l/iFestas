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



@NgModule({
  declarations: [
    UsuarioareaComponent,
    CadprodutoComponent,
    EditusuarioComponent,
    EditprodutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuarioareaRoutingModule,
    NgxMaskModule.forRoot(),
    MDBBootstrapModule.forRoot(),
  ]
})
export class UsuarioareaModule { }
