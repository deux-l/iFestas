import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioareaRoutingModule } from './usuarioarea-routing.module';
import { EditprodutoComponent } from './editproduto/editproduto.component';
import { EditusuarioComponent } from './editusuario/editusuario.component';
import { CadprodutoComponent } from './cadproduto/cadproduto.component';
import { UsuarioareaComponent } from './usuarioarea.component';


@NgModule({
  declarations: [
    UsuarioareaComponent,
    CadprodutoComponent,
    EditusuarioComponent,
    EditprodutoComponent
  ],
  imports: [
    CommonModule,
    UsuarioareaRoutingModule
  ]
})
export class UsuarioareaModule { }
