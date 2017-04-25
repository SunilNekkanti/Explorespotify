import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { LoginService } from './login/login.service';
import { Router } from '@angular/router'

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _loginService : LoginService, private _router : Router) {

    
   }

  canActivate(){

    console.log(this._loginService.isLoggedIn);

    if(this._loginService.isLoggedIn)
    {
          return true;
    }
    else
    {
          this._router.navigate(['login']);

          return false;
    }
     
  }

}

