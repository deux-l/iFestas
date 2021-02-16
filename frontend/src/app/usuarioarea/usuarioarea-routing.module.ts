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

          { path: 'editproduto', component: EditprodutoComponent},

          { path: 'editusuario/:id', component: EditusuarioComponent},

          { path: ':email', component: EditusuarioComponent},

        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioareaRoutingModule { }
