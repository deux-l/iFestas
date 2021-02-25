import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { CadusuarioComponent } from './cadusuario/cadusuario.component';
import { PaginanaoencontradaComponent } from './paginanaoencontrada/paginanaoencontrada.component';
import { LoginGuard } from './guards/login.guard';
import { TermosComponent } from './termos/termos.component';

const routes: Routes = [

  { path: 'usuarioarea',
    loadChildren: () => import ('src/app/usuarioarea/usuarioarea.module').then(m => m.UsuarioareaModule),
    canActivate: [LoginGuard]
  },

  { path: 'feed',
    loadChildren: () => import ('src/app/feed/feed.module').then(m => m.FeedModule),
    canActivate: [LoginGuard]
  },

  { path: 'landing', component: LandingComponent},

  { path: 'login', component: LoginComponent},

  { path: 'cadusuario', component: CadusuarioComponent},

  { path: 'termos', component: TermosComponent},

  { path: '', redirectTo: '/landing', pathMatch: 'full'},

  { path: '**', component: PaginanaoencontradaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
