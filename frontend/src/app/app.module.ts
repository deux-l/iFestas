import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { CadusuarioComponent } from './cadusuario/cadusuario.component';
import { PaginanaoencontradaComponent } from './paginanaoencontrada/paginanaoencontrada.component';
import { LoginService } from './services/login.service';
import { AuthenticationService } from './services/authentication.service';
import { CadusuarioService } from './services/cadusuario.service';
import { LoginGuard } from './guards/login.guard';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxMaskModule, IConfig } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    CadusuarioComponent,
    PaginanaoencontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    CadusuarioService,
    LoginService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
