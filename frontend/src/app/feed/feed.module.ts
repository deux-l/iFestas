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
    FeedRoutingModule
  ]
})
export class FeedModule { }
