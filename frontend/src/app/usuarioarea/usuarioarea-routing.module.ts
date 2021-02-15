import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioareaComponent } from './usuarioarea.component';
import { CadprodutoComponent } from './cadproduto/cadproduto.component';
import { EditusuarioComponent } from './editusuario/editusuario.component';
import { EditprodutoComponent } from './editproduto/editproduto.component';

const routes: Routes = [

  { path: '', component: UsuarioareaComponent,
        children: [
          { path: 'cadproduto', component: CadprodutoComponent},

          { path: 'editusuario', component: EditusuarioComponent},

          { path: 'editproduto', component: EditprodutoComponent}

        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioareaRoutingModule { }
