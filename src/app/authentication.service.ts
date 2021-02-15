import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  constructor(private router: Router ) {

   }

   estaLogado(){
    if (localStorage.length > 0) {
        return true;
    } else {

      return false;
    }
   }

  logout(){
    localStorage.removeItem('logado');
    this.router.navigate(['landing'])
  }

}
