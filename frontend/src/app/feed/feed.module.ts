import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { ComidasComponent } from './comidas/comidas.component';
import { ServicosComponent } from './servicos/servicos.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { BrinquedosComponent } from './brinquedos/brinquedos.component';
import { ProdutodetalheComponent } from './produtodetalhe/produtodetalhe.component';
import { FecharnegocioComponent } from './fecharnegocio/fecharnegocio.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxMaskModule, IConfig } from 'ngx-mask';




@NgModule({
  declarations: [
    FeedComponent,
    ComidasComponent,
    ServicosComponent,
    EquipamentosComponent,
    BrinquedosComponent,
    ProdutodetalheComponent,
    FecharnegocioComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    FeedRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxMaskModule.forRoot()

  ],
  providers: []
})
export class FeedModule { }
