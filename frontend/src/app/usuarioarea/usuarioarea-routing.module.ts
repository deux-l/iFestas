import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioareaComponent } from './usuarioarea.component';
import { CadprodutoComponent } from './cadproduto/cadproduto.component';
import { EditusuarioComponent } from './editusuario/editusuario.component';
import { EditprodutoComponent } from './editproduto/editproduto.component';
import { EditimagemComponent } from './editimagem/editimagem.component';
import { MeuspedidosComponent } from './meuspedidos/meuspedidos.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [

  { path: '', component: UsuarioareaComponent,
        children: [
          { path: 'editproduto/:id', component: EditprodutoComponent},

          { path: 'cadproduto/:id', component: CadprodutoComponent},

          { path: 'editusuario/:email', component: EditusuarioComponent},

          { path: 'editproduto/:id/editimagem/:id', component: EditimagemComponent},

          { path: 'vendas/:id', component: VendasComponent},

          { path: 'meuspedidos/:id', component: MeuspedidosComponent}

          //{ path: ':id', component: CadprodutoComponent},

          //{ path: ':email', component: EditusuarioComponent}

        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioareaRoutingModule { }
