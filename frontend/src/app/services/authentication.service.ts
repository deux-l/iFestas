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

  async logout(){
    localStorage.removeItem('logado');
    window.location.reload(await this.router.navigate(['landing']));
    //this.router.navigate(['landing'])
  }

}
