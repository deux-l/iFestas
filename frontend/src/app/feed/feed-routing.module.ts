import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './feed.component';
import { FecharnegocioComponent } from './fecharnegocio/fecharnegocio.component';
import { ProdutodetalheComponent } from './produtodetalhe/produtodetalhe.component';
import { BrinquedosComponent } from './brinquedos/brinquedos.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ComidasComponent } from './comidas/comidas.component';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [

  { path: '', component: FeedComponent},

  { path: 'comidas', component: ComidasComponent },

  { path: 'servicos', component: ServicosComponent },

  { path: 'equipamentos', component: EquipamentosComponent },

  { path: 'brinquedos', component: BrinquedosComponent },

  { path: 'produtodetalhe/:id', component: ProdutodetalheComponent },

  { path: 'produtodetalhe/:id/fecharnegocio/:id', component: FecharnegocioComponent,
    canActivate: [LoginGuard] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
