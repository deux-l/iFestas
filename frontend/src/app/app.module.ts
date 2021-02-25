import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
import { FeedService } from './services/feed.service';
import { LoginGuard } from './guards/login.guard';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { TermosComponent } from './termos/termos.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    CadusuarioComponent,
    PaginanaoencontradaComponent,
    CampoControlErroComponent,
    TermosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    AuthenticationService,
    CadusuarioService,
    FeedService,
    LoginService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
